import { Component } from '@angular/core';
import { ComponentAComponent } from './component-a/component-a.component';

@Component({
  selector: 'app-assignment1',
  standalone: true,
  imports: [ComponentAComponent],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css'
})
export class Assignment1Component {

}
