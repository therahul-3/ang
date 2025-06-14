import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive',
  imports: [FormsModule,CommonModule],
  template:`

  <input type="text" name="" id="" [(ngModel)]="name">
  
<div *ngIf="name; else elseTemplate" >  hi my name is {{name}}</div>

<ng-template #elseTemplate>
<div> Please enter your name</div>
</ng-template>
  

<div>
available fruits
<p *ngFor="let fruit of fruits">{{fruit}}</p>
</div>

  `,
  styleUrl: './directive.css'
})
export class Directive {

name='Ben'

fruits=['apple','kivi','mango','orange']

}
