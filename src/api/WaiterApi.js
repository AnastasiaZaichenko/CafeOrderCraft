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

  static delete(id) {
    return WaiterApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete from server");
    });
  }
}
