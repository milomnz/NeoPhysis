/** @autor LaMendez */
import { Component } from '@angular/core';
import { AuthPanelComponent } from '../../layout/auth-panel/auth-panel';
import { LoginFormComponent } from '../../features/login-form/login-form';

@Component({ selector: 'app-login-page', standalone: true, imports: [AuthPanelComponent, LoginFormComponent], templateUrl: './login-page.html', styleUrl: './login-page.scss' })
export class LoginPage {}
