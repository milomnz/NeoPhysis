/** @autor LaMendez */
import { Component, EventEmitter, Output, signal } from '@angular/core';

interface Category { icon: string; label: string; description: string; count: string; dark: boolean; }

@Component({ selector: 'app-forum-categories', standalone: true, templateUrl: './forum-categories.html', styleUrl: './forum-categories.scss' })
export class ForumCategoriesComponent {
  @Output() categorySelected = new EventEmitter<string>();
  protected readonly selectedCategory = signal('');

  readonly categories: Category[] = [
    { icon: 'biotech', label: 'Biotecnología', description: 'Explora avances en genética, edición de ADN y soluciones biotecnológicas aplicadas a la agricultura y salud.', count: '1.2k Publicaciones', dark: false },
    { icon: 'search', label: 'Investigación', description: 'Descubre nuevas metodologías, ensayos clínicos y estudios de campo realizados por investigadores de la comunidad.', count: '840 Publicaciones', dark: true },
    { icon: 'lightbulb', label: 'Innovación', description: 'Proyectos creativos y propuestas tecnológicas que buscan transformar los paradigmas actuales en el ecosistema científico.', count: '2.4k Publicaciones', dark: false },
  ];

  protected selectCategory(label: string): void {
    const nextValue = this.selectedCategory() === label ? '' : label;
    this.selectedCategory.set(nextValue);
    this.categorySelected.emit(nextValue);
  }
}

