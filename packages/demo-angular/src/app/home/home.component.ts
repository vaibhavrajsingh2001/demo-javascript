import { ContentChildren, ViewChildren } from '@angular/core';
import { Input, Output, HostListener } from '@angular/core';
import { ViewChild, ViewEncapsulation, EventEmitter } from '@angular/core';
import { OnInit, PipeTransform } from '@angular/core';
import { Component, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  queries: {
    contentChild: new ContentChild(ChildDirective),
    contentChildren: new ContentChildren(ChildDirective),
    viewChild: new ViewChild(ChildDirective),
    viewChildren: new ViewChildren(ChildDirective),
  },
})
export class TestComponent implements OnInit, PipeTransform {
  private _label: string;
  private _moveCount: number;

  constructor() {}

  @Input()
  @Output()
  testEmitter = new EventEmitter<string>();

  ngOnInit(): void {}
  ngOnDestroy() {}

  @ViewChild(Pane)
  set label(value: Pane) {
    this._label = value;
  }

  @HostListener('mouseover')
  mouseOver() {
    this._moveCount = this._moveCount + 1;
  }
}
