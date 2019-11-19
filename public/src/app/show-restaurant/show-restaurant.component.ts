import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Pipe,
  PipeTransform
} from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-show-restaurant",
  templateUrl: "./show-restaurant.component.html",
  styleUrls: ["./show-restaurant.component.css"]
})
export class ShowRestaurantComponent implements OnInit {
  restaurant: any = null;
  reviews: any[] = [];
  constructor(
    private _httpService: HttpService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getRestaurant(params.id).subscribe((data: any) => {
        if (data.hasOwnProperty("error")) {
          return this._router.navigate(["page/not/found"]);
        } else {
          // no errors
          this.restaurant = data.restaurant;
          this.reviews = data.restaurant.reviews.sort(
            (a, b) => b.rating - a.rating
          );
        }
      });
    });
  }
}
