import { Component, OnInit } from '@angular/core';
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {

  faLock = faLock;
  faEnvelope = faEnvelope;

  constructor() { }

  ngOnInit(): void {
  }

}
