import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Post } from '../../../core/models/post.model';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss'
})
export class PostCardComponent {
  @Input() post!: Post | any;
  private router = inject(Router);

  votar(dir: number, event: Event) {
    event.stopPropagation();
    if(this.post && this.post.votos !== undefined) {
      this.post.votos += dir;
    }
  }

  goToForum() {
    this.router.navigate(['/foros']);
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}