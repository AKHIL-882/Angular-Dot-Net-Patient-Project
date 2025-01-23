// Filename: login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onSubmit() {
    // Basic stub (replace with real authentication logic)
    const { username, password } = this.loginForm.value;
    if (username === 'admin' && password === 'password') {
      this.router.navigate(['/patients']);
    } else {
      alert('Invalid credentials');
    }
  }
}
