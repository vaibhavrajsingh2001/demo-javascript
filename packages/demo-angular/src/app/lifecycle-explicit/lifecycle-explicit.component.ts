import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-explicit',
  templateUrl: './lifecycle-explicit.component.html',
  styleUrls: ['./lifecycle-explicit.component.css']
})
export class LifecycleExplicitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  this.ngAfterViewInit();

}
