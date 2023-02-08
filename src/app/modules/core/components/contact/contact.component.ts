import { Component, OnInit } from '@angular/core';
import { faInfo, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  faInfo = faInfo;
  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
