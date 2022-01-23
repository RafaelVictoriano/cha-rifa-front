import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Winner} from "./Winner";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpCLient: HttpClient) { }

  getWinner(): Observable<Winner>{
    return this.httpCLient.get<Winner>("http://localhost:8080/sortition");
  }
}
