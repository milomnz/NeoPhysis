/** @autor milomnz */

import { Component } from '@angular/core';
import { SidebarNavComponent } from '../../layout/sidebar-nav/sidebar-nav';
import { SubmitForumComponent } from '../../layout/submit-forum/submit-forum';
import { FooterComponent } from '../../layout/footer/footer';
import { NeoHeaderComponent } from '../../layout/neo-header/neo-header';

@Component({
  selector: 'app-submit-forum-page',
  standalone: true,
  imports: [SidebarNavComponent, SubmitForumComponent, FooterComponent, NeoHeaderComponent],
  templateUrl: './submit-forum-page.html',
  styleUrl: './submit-forum-page.scss',
})
export class SubmitForumPage {}
