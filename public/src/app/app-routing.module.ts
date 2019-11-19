import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NewRestaurantComponent } from "./new-restaurant/new-restaurant.component";
import { AllRestaurantsComponent } from "./all-restaurants/all-restaurants.component";
import { ShowRestaurantComponent } from "./show-restaurant/show-restaurant.component";
import { NewReviewComponent } from "./new-review/new-review.component";

const routes: Routes = [
  {
    path: "restaurants/new",
    component: NewRestaurantComponent
  },
  {
    path: "restaurants",
    component: AllRestaurantsComponent
  },
  {
    path: "restaurants/:id",
    component: ShowRestaurantComponent
  },
  {
    path: "restaurants/:id/review",
    component: NewReviewComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
