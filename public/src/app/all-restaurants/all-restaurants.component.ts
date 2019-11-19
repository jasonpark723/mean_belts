import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-all-restaurants",
  templateUrl: "./all-restaurants.component.html",
  styleUrls: ["./all-restaurants.component.css"]
})
export class AllRestaurantsComponent implements OnInit {
  restaurants: any[] = [];
  restaurantToEdit = null;

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this._httpService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data.restaurants;
      for (let i = 0; i < this.restaurants.length; i++) {
        const rest = this.restaurants[i];
        var date = new Date(rest.createdAt);
        var seconds = date.getTime() / 1000;
        console.log("hi");

        if (Date.now() / 1000 > seconds + 30) {
          this.restaurants[i].passed = "disabled";
        } else {
          this.restaurants[i].passed = "";
        }
      }
    });
  }

  restToEdit(restaurant) {
    this.restaurantToEdit = { ...restaurant };
  }

  DeleteRest(id: string) {
    this._httpService.deleteRestaurant(id).subscribe((data: any) => {
      for (let i = 0; i < this.restaurants.length; i++) {
        const restaurant = this.restaurants[i];
        if (restaurant._id == id) {
          return this.restaurants.splice(i, 1);
        }
      }
    });
  }
}
