import {
  Component, OnInit, OnDestroy,
  AfterViewInit, ElementRef,
  QueryList, ViewChildren, ChangeDetectorRef, inject
} from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsService } from '../../core/services/posts';
import { Post, Recomendado, CarouselSlide } from '../../core/models/post.model';
import { PostCardComponent } from '../../shared/components/post-card/post-card';
import { RecCardComponent } from '../../shared/components/rec-card/rec-card';
import { SidebarNavComponent} from '../../layout/sidebar-nav/sidebar-nav';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostCardComponent, RecCardComponent, SidebarNavComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit, AfterViewInit, OnDestroy {

  slides: CarouselSlide[] = [];
  posts: Post[] = [];
  recomendados: Recomendado[] = [];

  currentSlide = 0;
  readonly AUTOPLAY_DELAY = 4000;
  private autoPlayInterval: ReturnType<typeof setInterval> | null = null;
  private observer!: IntersectionObserver;

  @ViewChildren('animTarget') animTargets!: QueryList<ElementRef>;

  private router = inject(Router);
  private postsService = inject(PostsService);
  private cdr = inject(ChangeDetectorRef);

  ngOnInit(): void {
    this.slides = this.postsService.getSlides();
    this.posts = this.postsService.getPosts();
    this.recomendados = this.postsService.getRecomendados();
    this.startAutoPlay();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          this.observer.unobserve(e.target);
        }
      }),
      { threshold: 0.15 }
    );
    this.animTargets.forEach(el => this.observer.observe(el.nativeElement));
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
    if (this.observer) this.observer.disconnect();
  }

  goToSlide(index: number): void {
    this.currentSlide = (index + this.slides.length) % this.slides.length;
  }

  nextSlide(): void { this.goToSlide(this.currentSlide + 1); }
  prevSlide(): void { this.goToSlide(this.currentSlide - 1); }

  pauseAutoPlay(): void { this.stopAutoPlay(); }
  resumeAutoPlay(): void { this.startAutoPlay(); }

  private startAutoPlay(): void {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
      this.cdr.markForCheck();
    }, this.AUTOPLAY_DELAY);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  irAForos(): void { this.router.navigate(['/foros']); }
  irAPublicar(): void { this.router.navigate(['/publicar']); }

  trackById(_: number, item: { id: number }): number { return item.id; }
}