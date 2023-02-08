import { Component, OnInit } from '@angular/core';
import { faSearch, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faSearch = faSearch;
  faBell = faBell;
  faEnvelope = faEnvelope;
  constructor() { }

  ngOnInit(): void {
  }

}
