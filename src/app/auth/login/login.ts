import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyInput } from "../../components/my-input/my-input";
import { MyButton } from "../../components/my-button/my-button";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, MyInput, MyButton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
