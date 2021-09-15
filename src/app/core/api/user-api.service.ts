import {Injectable} from '@angular/core';
import {HttpService} from "../services/http.service";

@Injectable()
export class UserApiService extends HttpService {

  constructor() {
    super();
  }

}
