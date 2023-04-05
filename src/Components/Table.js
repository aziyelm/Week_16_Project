//a component that represents table data (i.e. name and orders)
//order contains item and quantity

import React from "react";
import { OrderForm } from "./OrderForm.js";
import { Card } from "react-bootstrap";

export const Table = (props) => {
  const { table, updateTable, deleteTable } = props;

  const deleteOrder = (orderId) => {
    // console.log(orderId);
    const updatedTable = {
      ...table,
      orders: table.orders.filter((x) => x !== orderId),
    };
    updateTable(updatedTable);
  };

  const addNewOrder = (order) => {
    updateTable({ ...table, orders: [...table.orders, order] });
  };

  const orders = () => {
    return (
      <ul>
        {table.orders.map((order, index) => (
          <li key={index}>
            <label>{`Item: ${order.item} Quantity: ${order.quantity}`}</label>
            <button
              className="btn btn-warning"
              onClick={(e) => deleteOrder(order)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  };

  const deleteClick = (e) => {
    deleteTable(table._id);
  };

  return (
    <div>
            <Card>
              <Card.Header>
                <h3>{table.name}</h3>
              </Card.Header>
              <Card.Body>
                {orders({ orders, tableId: table._id, deleteOrder })}
              </Card.Body>
              <Card.Footer>
                <OrderForm addNewOrder={addNewOrder} />
                <button className="btn btn-danger" onClick={deleteClick}>
                  Delete Table
                </button>
              </Card.Footer>
            </Card>
    </div>
  );
};
