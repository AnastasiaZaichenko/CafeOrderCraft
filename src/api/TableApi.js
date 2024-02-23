export class TableApi {
  static API =
    "https://64eda7071f8721827141862f.mockapi.io/api/restaurant/table/";

  static request(url = "", method = "GET", body) {
    return fetch(TableApi.API + url, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  static getList() {
    return TableApi.request().catch(() => {
      throw new Error("Can not retrieve tables from server");
    });
  }

  static delete(id) {
    return TableApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete from server");
    });
  }

  static create(table) {
    return TableApi.request("", "POST", table).catch(() => {
      throw new Error("Can not create on server");
    });
  }

  static getOneEl(id) {
    return TableApi.request(id).catch(() => {
      throw new Error("Can not get element from server");
    });
  }

  static update(id, table) {
    return TableApi.request(id, "PUT", table).catch(() => {
      throw new Error("Can not update element on server");
    });
  }
}
