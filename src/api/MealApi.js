export class MealApi {
  static API =
    "https://64eda7071f8721827141862f.mockapi.io/api/restaurant/dish/";

  static request(url = "", method = "GET", body) {
    return fetch(MealApi.API + url, {
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
    return MealApi.request().catch(() => {
      throw new Error("Can not retrieve list from server");
    });
  }

  static delete(id) {
    return MealApi.request(id, "DELETE").catch(() => {
      throw new Error("Can not delete from server");
    });
  }
}
