import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentAComponent } from '../component-a/component-a.component';

@Component({
  selector: 'app-component-b',
  standalone: true,
  imports: [ComponentAComponent],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.css'
})
export class ComponentBComponent {
  @Input() inputValue:string = ''; 
  @Output() dataEvent = new EventEmitter<string>();

  saveValue(value:string){
    this.dataEvent.emit(value)
  }
}
