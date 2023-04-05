import { sushiApi } from "../Rest/SushiApi";

export const TableForm = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("create-table").value;
    sushiApi.CREATE_TABLE({ name: name, orders: [] });
    props.fetchTables();
    document.getElementById("create-table").value = "";
  };

  return (
    <div className="card">
      <div className="card-header">
        {" "}
        <h3>Check In</h3>{" "}
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <input
            className="form-control"
            type="text"
            placeholder="Table Name"
            id="create-table"
          ></input>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
