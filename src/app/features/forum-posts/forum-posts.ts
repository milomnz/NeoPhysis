/** @autor LaMendez */
import { CommonModule } from '@angular/common';
import { Component, computed, Input, signal, inject } from '@angular/core';
import { Router } from '@angular/router';

type Sort = 'reciente' | 'popular';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  category: string;
  categoryDark: boolean;
  title: string;
  excerpt: string;
  votes: number;
  comments: number;
  tags: string[];
  date: string;
}

interface PostState {
  vote: 'up' | 'down' | null;
  bookmarked: boolean;
  showComments: boolean;
}

@Component({
  selector: 'app-forum-posts',
  standalone: true,
  imports: [],
  templateUrl: './forum-posts.html',
  styleUrl: './forum-posts.scss',
})
export class ForumPostsComponent {
  private readonly router = inject(Router);

  @Input()
  set categoryFilter(value: string) {
    this.selectedCategory.set(value ?? '');
  }

  @Input()
  set tagFilter(value: string) {
    this.selectedTag.set(value ?? '');
  }

  protected readonly selectedCategory = signal('');
  protected readonly selectedTag = signal('');
  protected readonly searchQuery = signal('');
  protected readonly sort = signal<Sort>('reciente');
  protected readonly toast = signal('');
  protected readonly posts = signal<Post[]>([
    {
      id: 1,
      author: 'Dr. Julian V.',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBPYE6hQHS-h_dJ8aBWFTo-Jj3QTLHvayo94uCOWa3_vnFQslgHsnDTyxBRwhL-KhKB1e-1Gsj48doyEH0xYwPKkQJbuSicGiKZZoIPOqYl6GkqMT7chvJomyBuXSIS5kUoL9DNBulpu8_fAFhyrPaPfo83XmS1AaYypW7MCo4BeFmk2t_3_78BWJeVwO4PZ3Q2he1ES9lpU6rtz2uC5WnJdndXp56rkhe2ul6mBFGLRRXLmJFcNsAR5QUFMcy3b1jMlv4I8OTW1w3k',
      time: 'Hace 2 horas',
      category: 'Biotecnología',
      categoryDark: false,
      title: 'La importancia de la biotecnología en la seguridad alimentaria global',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
      votes: 124,
      comments: 48,
      tags: ['#Mitigación', '#Bioinformática'],
      date: '2026-05-20T09:00:00Z',
    },
    {
      id: 2,
      author: 'Sarah Chen',
      avatar:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDKNl16PUrswAbzeZ80af9kPB8OIgyj-gg0Hj4HOjWS3hOU8SIYw0VMUhrfkZC-v3VbBzg05vcjMUabrpjPE86WhBMjVDu4vMMpBt705O4HY1Ml6O2VAqh9R6pqHDxjdu5pl20vagG68BzhUIxhUdtr9jhJpk4Q0JHm6FT1dnmhsUyKiyKV8lQRNFyBGwcmqH_tjXngWRSqNJX9SH-CVM729F3dFg4NVDhww7eT37jgB3_0JuuhvYNatJtdoXG7uro4XgV2NnV6oZ5A',
      time: 'Hace 5 horas',
      category: 'Investigación',
      categoryDark: true,
      title: 'Metodologías emergentes en la secuenciación de nanoporos',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
      votes: 89,
      comments: 22,
      tags: ['#Genética', '#Automatización'],
      date: '2026-05-19T18:30:00Z',
    },
    {
      id: 3,
      author: 'Marta Ortega',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      time: 'Ayer',
      category: 'Innovación',
      categoryDark: false,
      title: 'Estrategias de innovación para acelerar la investigación abierta',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipiscing elit ante dictumst at, augue venenatis habitasse convallis ut sagittis inceptos eget a sollicitudin, arcu etiam',
      votes: 57,
      comments: 14,
      tags: ['#BioÉtica', '#Automatización'],
      date: '2026-05-18T13:15:00Z',
    },
  ]);

  protected readonly postStates = signal<Record<number, PostState>>({});

  protected readonly filteredPosts = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    return this.posts()
      .filter((post) => {
        const matchesCategory =
          !this.selectedCategory() || post.category === this.selectedCategory();
        const matchesTag = !this.selectedTag() || post.tags.includes(this.selectedTag());
        const matchesSearch =
          !query ||
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query);
        return matchesCategory && matchesTag && matchesSearch;
      })
      .sort((a, b) => {
        if (this.sort() === 'popular') {
          return b.votes - a.votes;
        }
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  });

  protected constructor() {
    this.loadStates();
  }

  protected setSort(s: Sort): void {
    this.sort.set(s);
  }

  protected updateSearch(query: string): void {
    this.searchQuery.set(query);
  }

  protected goToForum(post: Post): void {
    this.router.navigate(['/foro/detalle']);
  }

  protected toggleVote(post: Post, direction: 'up' | 'down', event: Event): void {
    event.stopPropagation();
    const current = this.getState(post);
    const active = current.vote === direction ? null : direction;
    this.postStates.update((state) => ({
      ...state,
      [post.id]: { ...current, vote: active },
    }));
    this.saveStates();
  }

  protected toggleBookmark(post: Post, event: Event): void {
    event.stopPropagation();
    const current = this.getState(post);
    this.postStates.update((state) => ({
      ...state,
      [post.id]: { ...current, bookmarked: !current.bookmarked },
    }));
    this.saveStates();
  }

  protected toggleComments(post: Post, event: Event): void {
    event.stopPropagation();
    const current = this.getState(post);
    this.postStates.update((state) => ({
      ...state,
      [post.id]: { ...current, showComments: !current.showComments },
    }));
    this.saveStates();
  }

  protected copyLink(post: Post, event: Event): void {
    event.stopPropagation();
    const url = `${location.origin}/post/${post.id}`;
    navigator.clipboard.writeText(url).then(() => {
      this.toast.set('Link copied!');
      setTimeout(() => this.toast.set(''), 1400);
    });
  }

  protected getState(post: Post): PostState {
    return this.postStates()[post.id] ?? { vote: null, bookmarked: false, showComments: false };
  }

  private loadStates(): void {
    const saved = localStorage.getItem('neophysis-post-states');
    if (saved) {
      this.postStates.set(JSON.parse(saved));
      return;
    }

    const initialState = this.posts().reduce(
      (state, post) => {
        state[post.id] = { vote: null, bookmarked: false, showComments: false };
        return state;
      },
      {} as Record<number, PostState>,
    );

    this.postStates.set(initialState);
  }

  private saveStates(): void {
    localStorage.setItem('neophysis-post-states', JSON.stringify(this.postStates()));
  }
}
