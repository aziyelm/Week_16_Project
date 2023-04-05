const REVIEW_ENDPOINT =
  "https://63f6a57559c944921f7768c9.mockapi.io/Sushi_App/reviews";

class ReviewApi {
  GET_REVIEW = async () => {
    try {
      const response = await fetch(REVIEW_ENDPOINT);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error fetching", e);
    }
  };

  PUT_REVIEW = async (review) => {
    try {
      const response = await fetch(`${REVIEW_ENDPOINT}/${review.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error updating reviews", e);
    }
  };

  CREATE_REVIEW = async (review) => {
    try {
      const response = await fetch(REVIEW_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      return response;
    } catch (e) {
      console.log("error creating review", e);
    }
  };

  DELETE_REVIEW = async (review) => {
    try {
      const response = await fetch(`${REVIEW_ENDPOINT}/${review}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error deleting review", e);
    }
  };
}

export const reviewApi = new ReviewApi();
