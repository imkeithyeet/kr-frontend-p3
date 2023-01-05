import React from 'react';

class StarRating extends React.Component {
    state = {
      hoveredRating: 0,
      selectedRating: 0
    };
  
    setHoveredRating = hoveredRating => {
      this.setState({ hoveredRating });
    };
  
    setSelectedRating = selectedRating => {
      this.setState({ selectedRating });
    };
  
    render() {
      const { hoveredRating, selectedRating } = this.state;
      const rating = hoveredRating || selectedRating;
  
      return (
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map(star => (
            <Star
              key={star}
              selected={star <= selectedRating}
              hovered={star <= rating}
              onMouseEnter={() => this.setHoveredRating(star)}
              onMouseLeave={() => this.setHoveredRating(0)}
              onClick={() => this.setSelectedRating(star)}
            />
          ))}
        </div>
      );
    }
  }
  
  const Star = ({ selected, hovered, onMouseEnter, onMouseLeave, onClick }) => (
    <div
      className={`star ${selected ? "selected" : ""} ${hovered ? "hovered" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      &#9733;
    </div>
  );
  

  export default StarRating