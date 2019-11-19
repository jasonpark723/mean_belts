import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { HttpService } from "../http.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-new-review",
  templateUrl: "./new-review.component.html",
  styleUrls: ["./new-review.component.css"]
})
export class NewReviewComponent implements OnInit {
  newReview = {
    name: "",
    rating: null,
    comment: ""
  };
  errors: string[] = [];
  restaurant: any = null;
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
        }
      });
    });
  }

  Cancel() {
    this._router.navigate(["restaurants", this.restaurant._id]);
  }

  onSubmit() {
    this._httpService
      .newReview(this.restaurant._id, this.newReview)
      .subscribe((data: any) => {
        if (data.hasOwnProperty("errors")) {
          this.errors = data.errors;
        } else {
          this._router.navigate(["/restaurants", this.restaurant._id]);
        }
      });
  }
}
