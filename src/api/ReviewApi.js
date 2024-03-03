export class ReviewApi {
  static API =
    "https://64eda7071f8721827141862f.mockapi.io/api/restaurant/reviews/";

  static request(url = "", method = "GET", body) {
    return fetch(ReviewApi.API + url, {
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
    return ReviewApi.request().catch(() => {
      throw new Error("Can not retrieve list from server");
    });
  }

  static create(review) {
    return ReviewApi.request("", "POST", review).catch(() => {
      throw new Error("Can not create review on server");
    });
  }
}
