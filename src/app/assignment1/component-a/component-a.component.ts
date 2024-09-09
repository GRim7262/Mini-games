import { Component } from '@angular/core';
import { ComponentBComponent } from '../component-b/component-b.component';

@Component({
  selector: 'app-component-a',
  standalone: true,
  imports: [ComponentBComponent],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.css'
})
export class ComponentAComponent {
  printedValueA: string = "";
  recData: string = "";

  printValue(value: string){
    this.printedValueA = value;
  }

  receiveData(data: string){
    this.recData = data;
  }
}
