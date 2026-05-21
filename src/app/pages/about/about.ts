import {
  Component, OnInit, OnDestroy,
  AfterViewInit, ElementRef,
  QueryList, ViewChildren
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../core/services/posts';
import { ValorCard, MisionCard } from '../../core/models/post.model';
import { SidebarNavComponent } from '../../layout/sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SidebarNavComponent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit, AfterViewInit, OnDestroy {

  misiones: MisionCard[] = [];
  valores: ValorCard[] = [];

  contadores = [
    { id: 1, label: 'Investigadores', target: 1200, current: 0, sufijo: '+' },
    { id: 2, label: 'Publicaciones', target: 340, current: 0, sufijo: '' },
    { id: 3, label: 'Universidades', target: 28, current: 0, sufijo: '' },
    { id: 4, label: 'Países', target: 12, current: 0, sufijo: '' }
  ];

  private observer!: IntersectionObserver;
  private counterObserver!: IntersectionObserver;
  private counterStarted = false;

  @ViewChildren('animTarget') animTargets!: QueryList<ElementRef>;
  @ViewChildren('counterSection') counterSection!: QueryList<ElementRef>;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.misiones = this.postsService.getMisiones();
    this.valores = this.postsService.getValores();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    this.animTargets.forEach(el => this.observer.observe(el.nativeElement));

    this.counterObserver = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting && !this.counterStarted) {
          this.counterStarted = true;
          this.animateCounters();
          this.counterObserver.disconnect();
        }
      }),
      { threshold: 0.5 }
    );
    this.counterSection.forEach(el => this.counterObserver.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    if (this.observer) this.observer.disconnect();
    if (this.counterObserver) this.counterObserver.disconnect();
  }

  private animateCounters(): void {
    const steps = 60, duration = 1800;
    this.contadores.forEach(c => {
      let step = 0;
      const inc = c.target / steps;
      const t = setInterval(() => {
        step++;
        c.current = Math.min(Math.round(inc * step), c.target);
        if (step >= steps) clearInterval(t);
      }, duration / steps);
    });
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
}