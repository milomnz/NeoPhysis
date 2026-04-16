/** @autor milomnz */

import { Component } from '@angular/core';
import { SidebarNavComponent } from '../../layout/sidebar-nav/sidebar-nav';
import { ArticleComponent } from '../../features/article/article';
import { FooterComponent } from '../../layout/footer/footer';
import { NeoHeaderComponent } from '../../layout/neo-header/neo-header';

@Component({
  selector: 'app-forum-page',
  standalone: true,
  imports: [SidebarNavComponent, ArticleComponent, FooterComponent, NeoHeaderComponent],
  templateUrl: './forum-page.html',
  styleUrl: './forum-page.scss',
})
export class ForumPage {}
