import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyButton } from "../../components/my-button/my-button";

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterModule, MyButton],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
