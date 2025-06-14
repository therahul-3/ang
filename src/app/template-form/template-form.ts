import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  template:`
<p>template form</p>  


<form  #myForm="ngForm" (ngSubmit)="handleSubmit(myForm)">

  <input type="text" name="name" id="name" ngModel  >
  <input type="email" name="emali" id="email" ngModel required>
  <button>Submit</button>
</form>

  `,
  styleUrl: './template-form.css'
})

export class TemplateForm {


handleSubmit=(form:any)=>{
  console.log(form)
  console.log('form submitted')
}



}

