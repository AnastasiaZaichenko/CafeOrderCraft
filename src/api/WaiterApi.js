export class WaiterApi {
  static API =
    "https://64eda7071f8721827141862f.mockapi.io/api/restaurant/waiter/";

  static request(url = "", method = "GET", body) {
    return fetch(WaiterApi.API + url, {
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
    return WaiterApi.request().catch(() => {
      throw new Error("Can not retrieve waiters from server");
    });
  }

  static getOneEl(id) {
    return WaiterApi.request(id).catch(() => {
      throw new Error("Can not get element from server");
    });
  }

  static delete(id) {
    return WaiterApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete element from server");
    });
  }

  static create(waiter) {
    return WaiterApi.request("", "POST", waiter).catch(() => {
      throw new Error("Can not create element on server");
    });
  }

  static update(id, waiter) {
    return WaiterApi.request(id, "PUT", waiter).catch(() => {
      throw new Error("Can not update element on server");
    });
  }
}
