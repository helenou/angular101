import { Component, OnInit } from '@angular/core'; @Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {  name = 'Sasa Lélé';
  product = {name: 'Pomme', price: 12.99};
  html = '<strong> Je suis un texte en gras </strong>';
  source = 'assets/images/source.jpg';

  message = null;

  liste = ['Hélène', 'ALI', 'Anaïs', 'Francis', 'Gauthier', 'Joanna', 'Léon', 'Paul', 'Vincent'];

  constructor() { }  ngOnInit() {
  }
  public  click(): void {
    alert('coucou');
  }  public confirm(e: MouseEvent): void {
    e.preventDefault();
    confirm('Etes vous sur ?');
  }}
