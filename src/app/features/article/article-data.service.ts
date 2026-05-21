/** @autor milomnz */

import { Injectable } from '@angular/core';
import { Article } from '../../shared/models/article';

@Injectable({ providedIn: 'root' })
export class ArticleDataService {
  getArticle(): Article {
    return {
      title: 'Del dato al campo...',
      imageUrl: 'assets/images/cafe.jpg',
      imageCaption: 'Imagen de Freepik.es',
      body: [
        'Neo Physis nace como un espacio de investigación aplicada...',
        'En esta fase inicial, el proyecto explora...',
        'A partir de observación territorial...',
      ],
      author: 'Juan Camilo Henao Muñoz',
      reviewer: 'Josué Daniel Montoya',
      researchLine: 'Bioinformática aplicada',
      projectStatus: 'Fase exploratoria',
    };
  }
}