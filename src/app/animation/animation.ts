import { Component } from '@angular/core';
import {trigger, transition, state, animate, style, AnimationEvent} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-animation',
  imports: [FormsModule],
  template:`
  
<input type="text" name="" id="" [(ngModel)]="name">
  <div [@sl]="name?'large':'small'" >Samll and large animation</div>


  <button class="btn btn-warning">bootstap button</button>


  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-danger">Go somewhere</a>
  </div>
</div>
  
  `,
  styleUrl: './animation.css',
animations: [
    trigger('sl', [
      state('small', style({
        fontSize: '14px',
        color: 'blue',
        backgroundColor: 'green'
      })),
      state('large', style({
        fontSize: '60px',
        color: 'red'
      })),
      transition('small => large', animate('1s')),
      transition('large => small', animate('0.5s'))
    ])
  ]
})
export class Animation {

  name=""

}
