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
  static create(meal) {
    return MealApi.request("", "POST", meal).catch(() => {
      throw new Error("Can not create on server");
    });
  }

  static getOneEl(id) {
    return MealApi.request(id).catch(() => {
      throw new Error("Can not get element from server");
    });
  }

  static update(id, meal) {
    return MealApi.request(id, "PUT", meal).catch(() => {
      throw new Error("Can not update element on server");
    });
  }
}
