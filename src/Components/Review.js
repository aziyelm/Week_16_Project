import React from "react";

export const Review = (props) => {
  const { review, deleteReview } = props;

  const deleteClick = (e) => {
    deleteReview(review.id);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3>{review.name}</h3>
      </div>
      <div className="card-body">
        {review.text}
      </div>
      <button className="btn btn-danger" onClick={deleteClick}>
        Delete
      </button>
    </div>
  );
};
