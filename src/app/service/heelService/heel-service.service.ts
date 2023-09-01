import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeelService {

  readonly API_URL = "http://localhost:8080"

  readonly ENDPOINT_DRESS = "/heel"

  constructor(private httpClient : HttpClient) { }

    getHeel(){
      return this.httpClient.get(this.API_URL + this.ENDPOINT_DRESS);
    }
}
