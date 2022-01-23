import { Component, OnInit } from '@angular/core';
import { Winner } from './Winner';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  clickMessage?: any;
  private _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Access-Control-Allow-Headers':
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
    }),
  };

  constructor(private httpCLient: HttpClient) {}

  ngOnInit(): void {
    // this.getWinner().subscribe(
    //   (winner: Winner) => {
    //     console.log(winner);
    //     this.clickMessage = winner.winner;
    //     console.log(this.clickMessage);
    //   },
    //   (error) => console.log(error)
    // );
  }

  getWinner(): void {
    console.log('Passei');

    for (let i = 0; i <= 21; i++) {
      const ll = this.httpCLient.get<Winner>(
        'http://localhost:8080/sortition',

        this._httpOptions
      );
      ll.forEach((w) => {
        this.clickMessage = w.winner;
      });
    }
  }
}
