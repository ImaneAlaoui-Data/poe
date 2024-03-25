import { Component } from '@angular/core';
import { Intern } from './types/intern.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
public interns: Array<Intern> = [
  {
    lastname: 'El Hachimi Alaoui',
    firstname: 'Imane'
  }
]
}