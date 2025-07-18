import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyButton } from "../../components/my-button/my-button";
import { NgOptimizedImage } from '@angular/common';




@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterModule, 
    MyButton,
    NgOptimizedImage],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {}
