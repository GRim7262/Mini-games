import { Component, Input } from '@angular/core';
import { GameControlComponent } from '../game-control/game-control.component';

@Component({
  selector: 'app-odd',
  standalone: true,
  imports: [GameControlComponent],
  templateUrl: './odd.component.html',
  styleUrl: './odd.component.css'
})
export class OddComponent {
  @Input() numElement: number = 0;
  odd: number = 0;

  checkOdd(){
    if(this.numElement % 2 !== 0){
      this.odd = this.odd + 1
    }
  }
}
