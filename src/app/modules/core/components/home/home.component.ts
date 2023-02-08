import { Component, OnInit } from '@angular/core';
import { faTimes, faStopwatch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faStopwatch = faStopwatch;

  constructor() { }

  ngOnInit(): void {
  }

}
