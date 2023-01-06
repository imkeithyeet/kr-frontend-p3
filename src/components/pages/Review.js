import React,{useState, useEffect} from "react";
import ReviewList from "./ReviewList"
// import './Review.css'

const API="http://localhost:9393/reviews"

function Review() {
  const initialReview = { id: null, name: '', description: '', rating: "" }
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentReview, setCurrentReview] = useState(initialReview);

  const addReview = (review) => {
    fetch('http://localhost:9393/reviews', {
    method: 'POST',
    body: JSON.stringify(review),
    headers: {
    'Content-Type': 'application/json'
    }
    })
    .then((response) => response.json())
    .then((newReview) => {
    setItems([...items, newReview]);
    });
    };
    const deleteReview = (id) => {
      fetch(`http://localhost:9393/reviews/${id}`, {
      method: 'DELETE',
      })
      .then(() => {
      const remainingReviews = items.filter((r) => r.id !== id);
      setItems(remainingReviews);
      });
      };

      const editReviewForm = (review) => {
        setEditing(true);
        setCurrentReview(review);
      }
const editReview = (review) => {
  fetch(`http://localhost:9393/reviews/${review.id}`, {
  method: 'PATCH',
  body: JSON.stringify(review),
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then((response) => response.json())
  .then((updatedReview) => {
    setEditing(false);
    setItems(items.map(review => (review.id === updatedReview.id ? updatedReview : review)));
    setCurrentReview(initialReview)
  })}



  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setItems(data))
  },[])
console.log(items)


    return (

      <div>
        <div className="review-container">
        <h1 className="r" style={{color: "blue"}}>Reviews</h1>
        {editing ? (
        <div>
          <form  onSubmit={e => {
          e.preventDefault();
          editReview(currentReview);
          }}>
              <label>Name:</label>
              <input  type="text" name="name" value={currentReview.name} onChange={e => setCurrentReview({ ...currentReview, name: e.target.value })} />
              <label className="P">Description:</label>
              <input type="text" name="description" value={currentReview.description} onChange={e => setCurrentReview({ ...currentReview, description: e.target.value })} />
              <label>Rating:</label>
              <input type="text" name="rating"  value={currentReview.rating} onChange={e => setCurrentReview({ ...currentReview, rating: e.target.value })} />

              <button type="submit">Update Review</button>
              </form>
              </div>
              ) : (
              <div className="stuff">
              <form onSubmit={e => {
              e.preventDefault();
              addReview({ name: e.target.name.value, description: e.target.description.value, rating: e.target.rating.value});
              e.target.name.value = '';
              e.target.description.value = '';
              e.target.rating.value = '';
              }}>
              <label>Name:</label>
              <input placeholder="name..." type="text" name="name" />
              <label>Description:</label>
              <input placeholder="description..." type="text" name="description" />
              <label>Rating:</label>
              <input placeholder="rating..." type="text" name="rating" />
              <div className="Submit">
              <button  type="submit">Add Review</button>
              </div>
          </form>
          </div>
          )}
          <div style={{
            borderWidth: '3px',
            borderStyle: 'solid',
            borderColor: 'black',
            padding: '50px'
          }}>
          {items.map(review => (
          <div  style={{
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'black',
            padding: '50px'
          }} key={review.id}>
          <h3>{review.name}</h3>
          <p>{review.description}</p>
          <p>{review.rating}</p>
          <button onClick={() => deleteReview(review.id)}>Delete</button>
          <button onClick={() => editReviewForm(review)}>Edit</button>
          </div>
          ))}
          </div>
    </div>
        <ReviewList className="reviewList" items={items} />
  </div>
  );
}
  
  export default Review;