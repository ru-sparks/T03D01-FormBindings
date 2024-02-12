import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.css']
})
export class FormExampleComponent implements OnInit {

  // Using the non-null asse
  // userForm!: FormGroup;, it means that you are telling the TypeScript compiler that userForm will be 
  //  initialized before it's accessed, and it will not be null or undefined. In this case in 'ngOnInit'.
  // Typescript, like most compilers, does a static, not-runtime analysis.
  
  userForm!: FormGroup;
  userBio: string = '';
  isReadOnly = true;

  // Dependency injection
  constructor(private fb: FormBuilder) { }

  // ngOnInit - a component lifecycle
  ngOnInit(): void {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted successfully!');
      console.log('Form value:', this.userForm.value);
    } else {
      console.log('Form is invalid!');
    }
  }
}
