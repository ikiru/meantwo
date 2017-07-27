import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs";

@Injectable()
export class BucketService {
  constructor(private _http: Http) {}

  getBuckets() {
    return this._http.get("/buckets").map(data => data.json()).toPromise();
  }

  create(bucket) {
    return this._http
      .post("/buckets", bucket)
      .map(data => data.json())
      .toPromise();
  }

  show(id) {
    return this._http
      .get(`/buckets/${id}`)
      .map(data => data.json())
      .toPromise();
  }

  update(id) {
    return this._http
      .get(`/buckets/${id}`)
      .map(data => data.json())
      .toPromise();
  }
}
