import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-new-restaurant",
  templateUrl: "./new-restaurant.component.html",
  styleUrls: ["./new-restaurant.component.css"]
})
export class NewRestaurantComponent implements OnInit {
  newRestaurant = {
    name: "",
    cuisine: ""
  };

  restaurants: any[] = [];

  errors: string[] = [];
  constructor(private _router: Router, private _httpService: HttpService) {}

  ngOnInit() {
    this.getAllRestaurants();
  }

  Cancel() {
    this._router.navigate(["/restaurants"]);
  }
  getAllRestaurants() {
    this._httpService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data.restaurants;
    });
  }

  onSubmit() {
    for (let rest of this.restaurants) {
      if (rest.name == this.newRestaurant.name) {
        return this.errors.push("Restaurant name must be unique!");
      }
    }
    this._httpService
      .newRestaurant(this.newRestaurant)
      .subscribe((data: any) => {
        if (data.hasOwnProperty("errors")) {
          this.errors = data.errors;
        } else {
          this._router.navigate(["/restaurants"]);
        }
      });
  }
}
