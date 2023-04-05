const SUSHI_ENDPOINT =
  "https://63f6a57559c944921f7768c9.mockapi.io/Sushi_App/sushi";

class SushiApi {
  GET_TABLE = async () => {
    try {
      const response = await fetch(SUSHI_ENDPOINT);
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error fetching", e);
    }
  };

  PUT_TABLE = async (table) => {
    // console.log(table._id);
    try {
      const response = await fetch(`${SUSHI_ENDPOINT}/${table._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(table),
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error updating tables", e);
    }
  };

  CREATE_TABLE = async (table) => {
    try {
      const response = await fetch(SUSHI_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(table),
      });
      //const data = await response.json();
      return response;
    } catch (e) {
      console.log("error creating table", e);
    }
  };

  DELETE_TABLE = async (order) => {
    try {
      const response = await fetch(`${SUSHI_ENDPOINT}/${order}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (e) {
      console.log("error deleting table", e);
    }
  };
}

export const sushiApi = new SushiApi();
