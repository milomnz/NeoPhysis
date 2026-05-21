/** @autor LaMendez */

import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-panel',
  standalone: true,
  templateUrl: './auth-panel.html',
  styleUrl: './auth-panel.scss',
})
export class AuthPanelComponent {
  readonly researchers = [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAaojiO-ORAWQqGq2eKZDA8ArblJqZvx9dNh3fREZcDOhYNeSnzvW4HyY3IhLSjuWW5bdEgwWq1hJ0c0jxltxEziJvHCJ6JAjn7hK-0lZMTe3XM7rzvHEH7vgUbQLGvmV4VBOMym1GQwYjbu1rCcTri2sAvWO5DMbmzQjyU15P3cAU1b49jUSgUO4v4eHKJcWOX5-8oeUtalJI6-Q5vAELH30dkfwHgk4WVepEr-hUUpkUMGuknwUXm1ZRu7tMVDIzDqMypaojBwbzJ', alt: 'Investigador 1' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP7UvbTGaarTuvDVAx3lw4od8D4p_0UGUDH4oePGiSP3DNFrFo5YBoFUMEwT4kR3jX7F1u6_bgwzrrVzVXbnRSB6I4cYxJU_2r46XismQ0TalKFr3VyOdUtTv1gAlnuEswslD4fMswmA7JyBX3XMVyOMk1IykucobXB3V2Ieu1nvWvpZW4qj5O81IPhy5tq0BBzCqeK6Wg1jd4_S6Iq30AOWBNV3N3C0PgGBJljRCJaVJBl-2OdNWR5uwcxC0Lcrbe2z0e52-Cb42L', alt: 'Investigador 2' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUhEan5lHN28KXhN5UnJr9u07vBFW9f5SBrcltuWzg89vNeh5gsbKlqOwjn_eiDdrx1diOff2yuscd1FbRBeUZwPJHyTwbbORiTuPthKdgvTUq4xlcur6IMBcYYz6DTrtIwghOBhmVDzFmEpIJhy7bAfKdvigGZZ3h22e15cfyBr8tqI4AYEKUJo09KNKc5ZlUehrIy_sRx5NdMuOE6NC77_iwaIY6cvj5xp1Y-kXcwdIdoMoM8RrQVnRWK0rCs2cjOdJRFDIKcPTc', alt: 'Investigador 3' },
  ];
}
