import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css'],
})
export class InputOutputComponent {
  @Input() item: number = 0;
  @Output() increment = new EventEmitter<number>();

  incre() {
    this.item += 1;
    this.increment.emit(this.item);
  }
  decre() {
    this.item -= 1;
    this.increment.emit(this.item);
  }
  reset() {
    this.item = 0;
    this.increment.emit(this.item);
  }
 
}
