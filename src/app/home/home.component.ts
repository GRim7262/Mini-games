import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  profile = {
    name: "Vinal Pawar",
    email: "vinalpawar1@outlook.in",
    bio: "Intern @ Info Origin Technologies Pvt Ltd.",
    avatarUrl: "./assets/profile_picture.jpg"
  };
}
