import React,{useState, useEffect} from "react";
import ReviewList from "./ReviewList"

const API="http://localhost:9292/reviews"

function Review() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentReview, setCurrentReview] = useState({ id: null, name: '', description: '', rating: "" });

  const addReview = (review) => {
    fetch('http://localhost:3000/reviews', {
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

    

const deleteReview = id => {
  setItems(items.filter(review => review.id !== id));
}

const editReview = (review) => {
  fetch(`http://localhost:3000/reviews/${review.id}`, {
  method: 'PATCH',
  body: JSON.stringify(review),
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then((response) => response.json())
  .then((updatedReview) => {
  const updatedReviews = items.map((r) =>
  r.id === updatedReview.id ? updatedReview : r
  );
  setItems(updatedReviews);
  });
  };

const updateReview = (id, updatedReview) => {
  setEditing(false);
  setItems(items.map(review => (review.id === id ? updatedReview : review)));
}

  useEffect(() =>{
    fetch(API)
    .then(res=>res.json())
    .then (data=>setItems(data))
  },[])
console.log(items)


    return (

      <div className="review-container">
    {editing ? (
    <div>
        <form onSubmit={e => {
        e.preventDefault();
        updateReview(currentReview.id, currentReview);
        }}>
            <label>Name:</label>
            <input placeholder="Your Name..." type="text" name="name" value={currentReview.name} onChange={e => setCurrentReview({ ...currentReview, name: e.target.value })} />
            <label>Description:</label>
            <input type="text" name="description" value={currentReview.description} onChange={e => setCurrentReview({ ...currentReview, description: e.target.value })} />
            <label>Rating:</label>
            <input type="text" name="rating" value={currentReview.rating} onChange={e => setCurrentReview({ ...currentReview, rating: e.target.value })} />
        
            <button type="submit">Update Review</button>
            </form>
            </div>
            ) : (
            <div>
            <form onSubmit={e => {
            e.preventDefault();
            addReview({ name: e.target.name.value, description: e.target.description.value, rating: e.target.rating.value});
            e.target.name.value = '';
            e.target.description.value = '';
            e.target.rating.value = '';
            }}>
            <label>Name:</label>
            <input type="text" name="name" />
            <label>Description:</label>
            <button type="submit">Add Review</button>
        </form>
        </div>
        )}
        <div>
        {items.map(review => (
        <div key={review.id}>
        <h3>{review.name}</h3>
        <p>{review.description}</p>
        <p>{review.rating}</p>
        <button onClick={() => deleteReview(review.id)}>Delete</button>
        <button onClick={() => editReview(review)}>Edit</button>
        </div>
        ))}
        </div>

  </div>
  );
}
  
  export default Review;
