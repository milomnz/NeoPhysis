/** @autor milomnz */

import { Component } from '@angular/core';

@Component({
  selector: 'app-neo-header',
  standalone: true,
  templateUrl: './neo-header.html',
  styleUrl: './neo-header.scss',
})
export class NeoHeaderComponent {
  readonly logoSrc = '/Logo2.png';
  readonly logoAlt = 'Neo Physis';
}
