/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

type Tab = 'publicaciones' | 'comentadas' | 'guardado';

@Component({
  selector: 'app-profile-feed',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-feed.html',
  styleUrl: './profile-feed.scss',
})
export class ProfileFeedComponent {
  protected readonly activeTab = signal<Tab>('publicaciones');
  protected readonly newTopic = signal('');
  protected readonly selectedTopics = signal([
    'Genética Aplicada',
    'Microbiología',
    'CRISPR-Cas9',
    'Ética Científica',
    'Bioinformática',
  ]);

  setTab(tab: Tab): void {
    this.activeTab.set(tab);
  }

  protected addTopic(): void {
    const topic = this.newTopic().trim();
    if (!topic || this.selectedTopics().includes(topic)) {
      this.newTopic.set('');
      return;
    }
    this.selectedTopics.update((topics) => [...topics, topic]);
    this.newTopic.set('');
  }

  protected removeTopic(topic: string): void {
    this.selectedTopics.update((topics) => topics.filter((current) => current !== topic));
  }
}
