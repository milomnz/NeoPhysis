/** @autor milomnz */

import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'acerca', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'foros', loadComponent: () => import('./pages/forums-page/forums-page').then(m => m.ForumsPage) },
  { path: 'foro/detalle', loadComponent: () => import('./pages/forum-page/forum-page').then(m => m.ForumPage) },
  { path: 'publicar', loadComponent: () => import('./pages/submit-forum-page/submit-forum-page').then(m => m.SubmitForumPage) },
  { path: 'login', loadComponent: () => import('./pages/login-page/login-page').then(m => m.LoginPage) },
  { path: 'registro', loadComponent: () => import('./pages/register-page/register-page').then(m => m.RegisterPage) },
  { path: 'perfil', loadComponent: () => import('./pages/profile-page/profile-page').then(m => m.ProfilePage) },
  { path: '**', redirectTo: 'home' },
];