// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LoginComponent } from "./login/login.component";
import { ListComponent } from "./list/list.component";

// Routes
const routes: Routes = [
  { path: "", pathMatch: "full", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "list", component: ListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
