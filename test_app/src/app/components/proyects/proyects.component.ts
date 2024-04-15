import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  image: string;
  url: string;
  description?: string;
}

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})

export class ProyectsComponent {
  projects: Project[] = [
    {
      title: 'Angelinanut',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/angelinanut2.jpg',
      url: 'https://angelinanut.github.io/nutricion/',
      description: 'Description for Angelinanut project.'
    },
    {
      title: '3D Game',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/3d-demo.webp',
      url: 'https://cpetruzzo.github.io/game-page/',
      description: 'Description for 3D Game project.'
    },
    {
      title: 'Adventurers Fate',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/adventurer.png',
      url: 'https://cpetruzzo.github.io/AnAdventurersFate/',
      description: 'Description for Adventurers Fate project.'
    },
    {
      title: 'Portfolio Angular',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/portfolioArgProg.webp',
      url: 'http://porfolio-cf060.web.app',
      description: 'Description for Portfolio Angular project.'
    },
    {
      title: 'Pasapp',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/image.webp',
      url: 'https://pasapp-117cc.web.app/',
      description: 'Description for Pasapp project.'
    },
    {
      title: 'Libreriacivica React',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/tienda-libreria-civica.webp',
      url: 'https://sparkly-crisp-736a93.netlify.app/',
      description: 'Description for Libreriacivica React project.'
    },
    {
      title: 'TicTacToe',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/tictactoe.webp',
      url: 'https://eclectic-mousse-c82d5b.netlify.app/',
      description: 'Description for TicTacToe project.'
    },
    {
      title: 'Twitter Cards',
      image: 'https://cpetruzzo.github.io/DisenioWeb/images/twitterclone.webp',
      url: 'https://resonant-beignet-661bf0.netlify.app/',
      description: 'Description for Twitter Cards project.'
    }
    // Aquí puedes agregar más proyectos de la misma manera
  ];
}
