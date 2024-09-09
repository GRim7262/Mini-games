import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web-app';
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  constructor(private router: Router) {}

  login() {
    const validUsername = 'admin';
    const validPassword = 'admin';

    if (this.username === validUsername && this.password === validPassword) {
      this.isLoggedIn = true;
      this.router.navigate(['/home']);
    } else {
      alert('Invalid credentials');
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
