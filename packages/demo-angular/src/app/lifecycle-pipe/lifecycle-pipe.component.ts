import { Component, OnInit, Pipe } from '@angular/core';

@Component({
  templateUrl: './lifecycle-pipe.component.html',
  styleUrls: ['./lifecycle-pipe.component.css']
})

@Pipe({
  name: 'testComponent',
  pure: false
})
export class LifecyclePipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterContentInit() { console.log('ngAfterContentInit'); }

  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }

  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }

  ngAfterViewInit() { console.log('ngAfterViewInit'); }

  ngDoCheck() { console.log('ngDoCheck'); }

  ngOnChanges() { console.log('ngOnChanges'); }


}
