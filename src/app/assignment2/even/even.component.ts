import { Component, Input } from '@angular/core';
import { GameControlComponent } from '../game-control/game-control.component';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [GameControlComponent],
  templateUrl: './even.component.html',
  styleUrl: './even.component.css'
})
export class EvenComponent {
  @Input() numElement: number = 0;
  even: number = 0;

  checkEven(){
    if(
      this.numElement % 2 === 0
    ){
      this.even = this.even + 1;
    }
  }
}
