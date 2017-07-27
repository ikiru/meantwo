// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListComponent } from "./list/list.component";

// Services
import { UserService } from "./user.service";
import { BucketService } from "./bucket.service";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, BucketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
