import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularIconComponent } from '../icons/angular-icon/angular-icon.component';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, SidebarMenuComponent, AngularIconComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  title = "Facundo Wegher's Portfolio";
}
