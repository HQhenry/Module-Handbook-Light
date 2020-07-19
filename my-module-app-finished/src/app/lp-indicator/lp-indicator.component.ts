import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lp-indicator',
  templateUrl: './lp-indicator.component.html',
  styleUrls: ['./lp-indicator.component.css']
})
export class LpIndicatorComponent implements OnInit {
  @Input() course;
  @Output() notify = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
