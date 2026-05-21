/** @autor milomnz */

import { Routes } from '@angular/router';
import { ForumPage } from './pages/forum-page/forum-page';
import { SubmitForumPage } from './pages/submit-forum-page/submit-forum-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'acerca', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'foros', component: ForumPage },
  { path: 'publicar', component: SubmitForumPage },
  { path: 'aliados', redirectTo: 'home', pathMatch: 'full' },
  { path: 'contacto', redirectTo: 'home', pathMatch: 'full' },
  { path: 'legal', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];