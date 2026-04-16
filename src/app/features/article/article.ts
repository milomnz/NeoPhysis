/** @autor milomnz */

import { Component, OnInit } from '@angular/core';
import { ArticleDataService } from './article-data.service';
import { ArticleMetaComponent } from './article-meta/article-meta';
import { Article } from '../../shared/models/article';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [ArticleMetaComponent],
  templateUrl: './article.html',
  styleUrls: ['./article.scss'],
})
export class ArticleComponent implements OnInit {
  article!: Article;

  constructor(private articleService: ArticleDataService) {}

  ngOnInit() {
    this.article = this.articleService.getArticle();
  }
}