import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle-ng-module',
  templateUrl: './lifecycle-ng-module.component.html',
  styleUrls: ['./lifecycle-ng-module.component.css'],
  outputs: [
    'id: testId'
  ]
})

@NgModule()
export class LifecycleNgModuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }

  ngAfterContentInit() { console.log('ngAfterContentInit'); }

  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }

  ngAfterViewInit() { console.log('ngAfterViewInit'); }

  ngDoCheck() { console.log('ngDoCheck'); }

  ngOnChanges() { console.log('ngOnChanges'); }

  ngOnDestroy() { console.log('ngOnDestroy'); }
}
