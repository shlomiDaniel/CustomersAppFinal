import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LoginComponent {
  identity!: string;


  constructor(private authService: AuthService) { }

  login() {
    debugger;
    this.authService.login(this.identity).subscribe(
      response => {
        // Handle successful login response
        // For example, save the token to local storage and navigate to a protected route
        localStorage.setItem('token', response.token);
        // Redirect to a protected route
      },
      error => {
        // Handle login error
      }
    );
  }
}
