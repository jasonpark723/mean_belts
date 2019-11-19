import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getRestaurants() {
    return this._http.get("/api/restaurants");
  }

  newRestaurant(newRestaurant) {
    return this._http.post("/api/restaurants", newRestaurant);
  }

  getRestaurant(id: string) {
    return this._http.get("/api/restaurants/" + id);
  }

  updateRestaurant(id: string, edittedRestaurant) {
    return this._http.put("/api/restaurants/" + id, edittedRestaurant);
  }

  deleteRestaurant(id: string) {
    return this._http.delete("/api/restaurants/" + id);
  }

  newReview(id: string, newReview) {
    return this._http.post(`/api/restaurants/${id}/review`, newReview);
  }

  // newCake(newCake) {
  //   console.log(newCake);
  //   return this._http.post("/api/cakes", newCake);
  // }

  // rateCake(rateCake, id) {
  //   console.log(rateCake);
  //   return this._http.put("/api/cakes/" + id, rateCake);
  // }
}
