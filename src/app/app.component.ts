import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <div>Hello world</div>

    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="name" placeholder="Name">
      <input type="text" formControlName="age" placeholder="Age">
      <button type="submit">Submit</button>
    </form>
  `,
})
export class AppComponent {
  title = 'test-migrations';

  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    name: ['', Validators.required],
    age: ['']
  });

  onSubmit() {
    console.log(this.form.value);
  }

}
