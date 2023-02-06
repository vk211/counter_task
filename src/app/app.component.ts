import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter Task';
   count:number = 0;

  acceptEvent(_event: any) {
    console.log("event emitted this:", _event );
    this.count=_event;
    
  }
  clr(){
    if(){
      return 'red'
    }
  }
}