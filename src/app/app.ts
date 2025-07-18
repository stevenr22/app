import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
