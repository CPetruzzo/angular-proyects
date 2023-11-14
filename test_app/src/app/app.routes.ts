import { Routes } from '@angular/router';
import { ExperienceComponent } from './components/experience/experience.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducationComponent } from './components/education/education.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    { path: 'landing', component: LandingComponent },
    { path: '',   redirectTo: '/landing', pathMatch: 'full' },
    { path: 'aboutme', component: AboutmeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'proyects', component: ProyectsComponent },
    { path: 'contact', component: ContactComponent },
];