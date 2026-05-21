/** @autor milomnz */

import { Component, Input } from '@angular/core';
import { Article } from '../../../shared/models/article';

@Component({
  selector: 'app-article-meta',
  standalone: true,
  templateUrl: './article-meta.html',
})
export class ArticleMetaComponent {
  @Input() article!: Article;
}