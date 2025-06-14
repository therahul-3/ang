import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateForm } from "./template-form/template-form";
import { Reactiveform } from "./reactiveform/reactiveform";
import { Directive } from "./directive/directive";
import { Animation } from "./animation/animation";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TemplateForm, Reactiveform, Directive, Animation],
  template:`
<app-template-form/>
  <app-reactiveform/>
  <app-directive/>
  <app-animation/>
  `,
  
})
export class App {
  protected title = 'ang1';
}
