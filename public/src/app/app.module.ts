// Modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Components
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

// Services
import { UserService } from "./user.service";

@NgModule({
  declarations: [AppComponent, LoginComponent, DashboardComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
