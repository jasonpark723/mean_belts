import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AllRestaurantsComponent } from "./all-restaurants/all-restaurants.component";
import { EditRestaurantComponent } from "./edit-restaurant/edit-restaurant.component";
import { NewRestaurantComponent } from "./new-restaurant/new-restaurant.component";
import { ShowRestaurantComponent } from './show-restaurant/show-restaurant.component';
import { NewReviewComponent } from './new-review/new-review.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
// import { NewAuthorComponent } from "./new-author/new-author.component";
// import { EditAuthorComponent } from "./edit-author/edit-author.component";
// import { AllAuthorsComponent } from "./all-authors/all-authors.component";

@NgModule({
  declarations: [
    AppComponent,
    AllRestaurantsComponent,
    EditRestaurantComponent,
    NewRestaurantComponent,
    ShowRestaurantComponent,
    NewReviewComponent,
    RestaurantComponent
    // NewAuthorComponent,
    // EditAuthorComponent,
    // AllAuthorsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
