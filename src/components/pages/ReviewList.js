import React from "react";
import ReviewItem from "./ReviewItem";

function ReviewList({reviews}) {

    const mappedReviews= reviews?.map((review) => {
      return <ReviewItem
       key={review.id}
       name={review.name}
       description={review.description}
       rating={review.rating}
       />
    })

  return (
    <div>
        <ul className="cards">{mappedReviews}</ul>
    </div>
  );
}

export default ReviewList;