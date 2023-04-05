import { reviewApi } from "../Rest/ReviewApi";

export const ReviewForm = (props) => {

  const onSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("create-review").value;
    let text = document.getElementById("create-review-text").value;
    reviewApi.CREATE_REVIEW({ name: name, text: text, reviews: [] });
    props.fetchReviews();
    document.getElementById("create-review").value = "";
    document.getElementById("create-review-text").value = "";
  };

  return (
    <div className="card">
      <div className="card-header">
        {" "}
        <h3>Add a Review</h3>{" "}
      </div>
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Name" id="create-review"></input><br/>
          <textarea className="form-control" type="text" placeholder="" id="create-review-text"></textarea><br/>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
