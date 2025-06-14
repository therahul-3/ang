import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule],
  template:`
<p>reactive form</p>  


<form  [formGroup]="myForm" (ngSubmit)="handleSubmit()">

  <input type="text" formControlName="name"  id="name"   >
  <input type="email" formControlName="email" id="email"  >
  <button>Submit</button>
</form>

  `,
  styleUrl: './reactiveform.css'
})
export class Reactiveform {

myForm=new FormGroup({
  name:new FormControl('name',[Validators.required]),
  email:new FormControl('',[Validators.email,Validators.required])
})


handleSubmit=()=>{
  console.log(this.myForm)
}

}
