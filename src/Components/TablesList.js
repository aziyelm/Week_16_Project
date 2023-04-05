import React, { Component } from "react";
import { Table } from "./Table";
import { sushiApi } from "../Rest/SushiApi";
import { TableForm } from "./TableForm";

export default class TablesList extends Component {
  state = {
    tables: [],
  };

  componentDidMount() {
    this.fetchTables();
  }

  fetchTables = async () => {
    const tables = await sushiApi.GET_TABLE();
    this.setState({ tables });
  };

  updateTable = async (updatedTable) => {
    await sushiApi.PUT_TABLE(updatedTable);
    this.fetchTables();
  };

  createTable = async (newTable) => {
    await sushiApi.CREATE_TABLE(newTable);
    this.fetchTables();
    document.getElementById("create-table").value = "";
  };

  deleteTable = async (_id) => {
    await sushiApi.DELETE_TABLE(_id);
    this.fetchTables();
  };

  render() {
    return (
      <div>
        <TableForm fetchTables={this.fetchTables} />
        {this.state.tables.map((table) => (
          <Table
            table={table}
            key={table._id}
            updateTable={this.updateTable}
            deleteTable={this.deleteTable}
          />
        ))}
      </div>
    );
  }
}

