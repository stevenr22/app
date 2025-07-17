import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.html',
  styleUrl: './my-input.css'
})
export class MyInput {
  @Input() type: string = "";
  @Input() id: string = "";
  @Input() name: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
 


}
