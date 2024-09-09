import { Component } from '@angular/core';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';

@Component({
  selector: 'app-assignment2',
  standalone: true,
  imports: [GameControlComponent, EvenComponent, OddComponent],
  templateUrl: './assignment2.component.html',
  styleUrl: './assignment2.component.css'
})
export class Assignment2Component {

}
