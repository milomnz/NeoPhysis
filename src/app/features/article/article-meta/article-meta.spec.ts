/** @autor milomnz */

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMetaComponent } from './article-meta';
import { Article } from '../../../shared/models/article';

describe('ArticleMetaComponent', () => {
  let component: ArticleMetaComponent;
  let fixture: ComponentFixture<ArticleMetaComponent>;

  const mockArticle: Article = {
    title: 'Test',
    imageUrl: '',
    imageCaption: '',
    body: [],
    author: 'Author',
    reviewer: 'Reviewer',
    researchLine: 'Line',
    projectStatus: 'Status',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMetaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArticleMetaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('article', mockArticle);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
