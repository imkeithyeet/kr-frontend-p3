
function ReviewItem ({ name, description, rating}) {
 
  
    return (
      <li 
      >
        <h4>{name}</h4>
        <h4>{description}</h4>
        <h4>{rating}</h4>
      </li>
    );
  }
  
  export default ReviewItem;