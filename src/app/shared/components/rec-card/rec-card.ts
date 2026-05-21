import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recomendado } from '../../../core/models/post.model';

@Component({
  selector: 'app-rec-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rec-card.html',
  styleUrl: './rec-card.scss'
})
export class RecCardComponent {
  @Input() rec!: Recomendado;
}