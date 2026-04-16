/** @autor milomnz */

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-nav.html',
  styleUrl: './sidebar-nav.scss',
})
export class SidebarNavComponent implements OnDestroy {
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  protected readonly menuOpen = signal(false);

  readonly navLinks = [
    { label: 'Inicio', path: '/' },
    { label: 'Foros relevantes', path: '/foros' },
    { label: 'Aliados', path: '/aliados' },
    { label: 'Publicar un foro', path: '/publicar' },
    { label: 'Acerca de', path: '/acerca' },
    { label: 'Contacto', path: '/contacto' },
    { label: 'Acuerdos legales', path: '/legal' },
  ];

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
    this.syncBodyScroll();
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.syncBodyScroll();
  }

  onNavClick(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    if (!window.matchMedia('(max-width: 1023px)').matches) {
      this.menuOpen.set(false);
    }
    this.syncBodyScroll();
  }

  ngOnDestroy(): void {
    this.doc.body.style.overflow = '';
  }

  private syncBodyScroll(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const mobile = window.matchMedia('(max-width: 1023px)').matches;
    this.doc.body.style.overflow =
      mobile && this.menuOpen() ? 'hidden' : '';
  }
}
