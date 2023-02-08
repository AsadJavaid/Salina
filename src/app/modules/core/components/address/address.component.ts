import { Component, OnInit } from '@angular/core';
import { faPlus, faPager } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  faPlus = faPlus;
  faPager = faPager;
  constructor() { }

  ngOnInit(): void {
  }

}
