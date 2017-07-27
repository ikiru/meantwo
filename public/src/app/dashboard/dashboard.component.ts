import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { UserService } from "../user.service";
import { BucketService } from "../bucket.service";
import { Router } from "@angular/router";

import "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  currentUser = { _id: "" };
  newItem = { user: "" };
  errors: string[] = [];

  constructor(
    private _bucketService: BucketService,
    private _userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  createItem() {
    this.errors = [];
    console.log(this.newItem);
    this.newItem.user = this.currentUser._id;
    return this._bucketService
      .create(this.newItem)
      .then(bucket => {
        if (bucket.errors) {
          for (let key in bucket.errors) {
            let error = bucket.error[key];
            this.errors.push(error.message);
          }
        } else {
          this.router.navigateByUrl("/dashboard");
        }
      })
      .catch(err => console.log(err));
  }

  getCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
  }

  logout() {
    this._userService.logout();
    this.router.navigateByUrl("/");
  }
}
