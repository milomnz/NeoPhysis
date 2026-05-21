/** @autor LaMendez */
import { Component } from '@angular/core';
import { SidebarNavComponent } from '../../layout/sidebar-nav/sidebar-nav';
import { NeoHeaderComponent } from '../../layout/neo-header/neo-header';
import { FooterComponent } from '../../layout/footer/footer';
import { ProfileCardComponent } from '../../features/profile-card/profile-card';
import { ProfileFeedComponent } from '../../features/profile-feed/profile-feed';

@Component({ selector: 'app-profile-page', standalone: true, imports: [SidebarNavComponent, NeoHeaderComponent, FooterComponent, ProfileCardComponent, ProfileFeedComponent], templateUrl: './profile-page.html', styleUrl: './profile-page.scss' })
export class ProfilePage {}
