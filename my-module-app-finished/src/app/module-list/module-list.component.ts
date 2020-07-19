import { Component, OnInit } from '@angular/core';

import { courses } from '../courses';
@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  courses =courses;
  constructor() { }

  onNotify() {
    window.alert('Mit Leistungspunkten (LP) wird der Aufwand bemessen, der für eine bestimmte Lehrveranstaltung aufgebracht werden muss.');
  }
  ngOnInit(): void {
  }

}
