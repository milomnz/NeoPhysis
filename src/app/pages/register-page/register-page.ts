/** @autor LaMendez */
import { Component } from '@angular/core';
import { AuthPanelComponent } from '../../layout/auth-panel/auth-panel';
import { RegisterFormComponent } from '../../features/register-form/register-form';

@Component({ selector: 'app-register-page', standalone: true, imports: [AuthPanelComponent, RegisterFormComponent], templateUrl: './register-page.html', styleUrl: './register-page.scss' })
export class RegisterPage {}
