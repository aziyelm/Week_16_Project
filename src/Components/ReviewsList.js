// a container inside of Order page that houses review components.
//contains review

import React, { Component } from "react";
import { Review } from "./Review";
import { reviewApi } from "../Rest/ReviewApi";
import { ReviewForm } from "./ReviewForm";

export default class ReviewsList extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    this.fetchReviews();
  }

  fetchReviews = async () => {
    const reviews = await reviewApi.GET_REVIEW();
    this.setState({ reviews });
  };

  updateReview = async (updatedReview) => {
    await reviewApi.PUT_REVIEW(updatedReview);
    this.fetchReviews();
  };

  createReview = async (newReview) => {
    await reviewApi.CREATE_REVIEW(newReview);
    this.fetchReviews();
    document.getElementById("create-review").value = "";
    document.getElementById("create-review-text").value = "";
  };

  deleteReview = async (id) => {
    await reviewApi.DELETE_REVIEW(id);
    this.fetchReviews();
  };

  render() {
    return (
      <div>
        <ReviewForm fetchReviews={this.fetchReviews} />
        {this.state.reviews.map((review) => (
          <div>
            <Review
            review={review}
            key={review.id}
            updateReview={this.updateReview}
            deleteReview={this.deleteReview}
            />
          </div>
          
        ))}
      </div>
    );
  }
}

