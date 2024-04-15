import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { YoutubeIconComponent } from '../icons/youtube-icon/youtube-icon.component';
import { LinkedinIconComponent } from '../icons/linkedin-icon/linkedin-icon.component';
import { AngularIconComponent } from '../icons/angular-icon/angular-icon.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [CommonModule, GithubIconComponent, YoutubeIconComponent, LinkedinIconComponent, AngularIconComponent, RouterModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})

export class SidebarMenuComponent {
}
