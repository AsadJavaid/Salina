import { Component, OnInit } from '@angular/core';
import { faLandmark, faBell } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.scss']
})
export class BusinessDetailsComponent implements OnInit {

  faLandmark = faLandmark;
  faBell = faBell;
  
  constructor() { }

  ngOnInit(): void {
  }

}
