import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { YoutubeIconComponent } from '../icons/youtube-icon/youtube-icon.component';
import { LinkedinIconComponent } from '../icons/linkedin-icon/linkedin-icon.component';
import { AngularIconComponent } from '../icons/angular-icon/angular-icon.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, GithubIconComponent, YoutubeIconComponent, LinkedinIconComponent, AngularIconComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  title = "Facundo Wegher's Portfolio";
}
