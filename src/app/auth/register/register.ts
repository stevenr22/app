import { Component } from '@angular/core';
import { MyInput } from "../../components/my-input/my-input";
import { MyButton } from "../../components/my-button/my-button";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MyInput, MyButton, RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
