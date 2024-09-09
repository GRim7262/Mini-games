import { Component, ViewChild } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-game-control',
  standalone: true,
  imports: [EvenComponent, OddComponent],
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  count: number = 0;
  stopBtnClick: number = 0;

  @ViewChild(EvenComponent) child1! : EvenComponent;
  callcheckEven(){
    this.child1.checkEven()
  }

  @ViewChild(OddComponent) child2! : OddComponent;
  callcheckOdd(){
    this.child2.checkOdd()
  }

  setTime(){
    let interval = setInterval(() => {
      this.count++;

      this.callcheckEven();
      this.callcheckOdd();

      if(this.stopBtnClick === 1){
        clearInterval(interval)
      }
    }, 1000)
  }

  stopBtn(){
    this.stopBtnClick = 1;

    setTimeout(() =>{
      this.stopBtnClick = 0;
    },1000)
  }

}
