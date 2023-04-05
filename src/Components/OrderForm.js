// a form at the bottom of Order component that allows users to submit orders

import React, { useState } from "react";

export const OrderForm = (props) => {
  const [item, setItem] = useState(""); //empty string
  const [quantity, setQuantity] = useState(""); 

  //method to ensure the input is a number
  const handleQuantityInput = (e) => {
    const int = parseInt(e.target.value, 10); //target value rounded to the 10th
    setQuantity(int >= 0 ? int : ""); //is the number >=0? then pass in the number. else pass in an empty string
  };

  const onSubmit = (e) => {
    e.preventDefault(); //prevent refreshing page
    if (item && quantity) {
      //if item and quantity are true
      props.addNewOrder({ item, quantity }); //call addNewOrder method which adds inputted item and quantity

      //set input back to empty strings
      setItem("");
      setQuantity("");
    } else {
      console.log("Invalid input");
    }
  };

  return (
    <div>
      <h4>Order</h4>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />{" "}
        <input
          type="text"
          placeholder="quantity"
          value={quantity}
          onChange={handleQuantityInput}
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};
