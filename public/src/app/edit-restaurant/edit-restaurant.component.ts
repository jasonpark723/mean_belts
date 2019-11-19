import { Component, OnInit, Input } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HttpService } from "../http.service";

@Component({
  selector: "app-edit-restaurant",
  templateUrl: "./edit-restaurant.component.html",
  styleUrls: ["./edit-restaurant.component.css"]
})
export class EditRestaurantComponent implements OnInit {
  @Input() restaurantToEdit: any;

  restaurants: any[] = [];

  errors: string[] = [];

  constructor(
    private _router: Router,
    private _httpService: HttpService,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getAllRestaurants();
  }

  Cancel() {
    this.restaurantToEdit = null;
  }
  getAllRestaurants() {
    this._httpService.getRestaurants().subscribe((data: any) => {
      this.restaurants = data.restaurants;
      for (let i = 0; i < this.restaurants.length; i++) {
        const rest = this.restaurants[i];
        var date = new Date(rest.createdAt);
        var seconds = date.getTime() / 1000;
        if (Date.now() / 1000 > seconds + 30) {
          this.restaurants[i].passed = "disabled";
        } else {
          this.restaurants[i].passed = "";
        }
      }
    });
  }

  onSubmit() {
    console.log("HELLO");
    console.log(this.restaurants.length);
    for (let rest of this.restaurants) {
      console.log("hi");
      console.log(rest.name, this.restaurantToEdit.name);
      if (
        rest.name == this.restaurantToEdit.name &&
        rest._id != this.restaurantToEdit._id
      ) {
        return this.errors.push("Restaurant name must be unique!");
      }
    }

    this._httpService
      .updateRestaurant(this.restaurantToEdit._id, this.restaurantToEdit)
      .subscribe((data: any) => {
        if (data.hasOwnProperty("errors")) {
          this.errors = data.errors;
        } else {
          this.restaurantToEdit = null;
          this.errors = [];
        }
      });
  }
}
