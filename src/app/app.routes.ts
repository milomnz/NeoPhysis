/** @autor milomnz */

import { Routes } from '@angular/router';
import { ForumPage } from './pages/forum-page/forum-page';
import { SubmitForumPage } from './pages/submit-forum-page/submit-forum-page';

export const routes: Routes = [
  { path: '', component: ForumPage },
  { path: 'publicar', component: SubmitForumPage },
  { path: 'foros', redirectTo: '', pathMatch: 'full' },
  { path: 'aliados', redirectTo: '', pathMatch: 'full' },
  { path: 'acerca', redirectTo: '', pathMatch: 'full' },
  { path: 'contacto', redirectTo: '', pathMatch: 'full' },
  { path: 'legal', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];