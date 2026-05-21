/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, signal, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

type Tab = 'publicaciones' | 'comentadas' | 'guardado';

interface SavedPost {
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

@Component({
  selector: 'app-profile-feed',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-feed.html',
  styleUrl: './profile-feed.scss',
})
export class ProfileFeedComponent implements OnInit {
  protected readonly activeTab = signal<Tab>('publicaciones');
  protected readonly newTopic = signal('');
  protected readonly savedPosts = signal<SavedPost[]>([]);
  protected readonly selectedTopics = signal([
    'Genética Aplicada',
    'Microbiología',
    'CRISPR-Cas9',
    'Ética Científica',
    'Bioinformática',
  ]);

  ngOnInit(): void {
    this.loadSavedPosts();
  }

  private loadSavedPosts(): void {
    const saved = localStorage.getItem('neophysis-saved-posts');
    if (saved) {
      this.savedPosts.set(JSON.parse(saved));
    }
  }

  setTab(tab: Tab): void {
    if (tab === 'guardado') {
      this.loadSavedPosts();
    }
    this.activeTab.set(tab);
  }

  protected removeTopic(topic: string): void {
    this.selectedTopics.update((topics) => topics.filter((current) => current !== topic));
  }
}
