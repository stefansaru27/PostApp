import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../dashboard/service/login.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.loginService
        .login(username, password)
        .pipe(
          catchError((error) => {
            this.errorMessage = error;
            return of(null);
          })
        )
        .subscribe((response) => {
          if (response) {
            console.log('Login successful', response);

            this.navigateDashboard();
          } else {
            console.error('Login failed', this.errorMessage);
          }
        });
    } else {
      console.log('Form is invalid');
    }
  }

  navigateRegister() {
    this.router.navigate(['/register']);
  }

  navigateDashboard() {
    this.router.navigate(['/dashboard']);
  }
}
