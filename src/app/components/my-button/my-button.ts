import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-button',
  imports: [],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() type: string = "";
  @Input() id: string = "";
  @Input() class: string = ""; //clase personalizada
  @Input() buttonText: string = "";


}
