import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-daughter',
  templateUrl: './daughter.component.html',
  styleUrls: ['./daughter.component.scss']
})
export class DaughterComponent implements OnInit {
  @Input() counter!: number;
  @Output() changeCounter = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  duplicate() {
    this.counter = this.counter * 2;
    this.changeCounter.emit(this.counter);
  }
  resetGrandDaughter(event: number) {
    this.counter = event;
    this.changeCounter.emit(this.counter);
  }

}
