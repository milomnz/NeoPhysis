/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginFormComponent {
  protected readonly form;
  protected readonly showPassword = signal(false);
  protected readonly isLoading = signal(false);
  protected readonly loginError = signal('');
  protected readonly loginSuccess = signal('');
  protected readonly shake = signal(false);

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@/)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      remember: [false],
    });

    const saved = localStorage.getItem('neophysis-login');
    if (saved) {
      const payload = JSON.parse(saved);
      this.form.patchValue({ email: payload.email, remember: true });
    }
  }

  protected getEmailError(): string {
    const control = this.form.get('email');
    if (!control || !(control.touched || control.dirty)) return '';
    if (control.hasError('required')) return 'El correo es obligatorio.';
    if (control.hasError('pattern')) return 'El correo debe contener un @.';
    return control.hasError('email') ? 'Ingresa un correo válido.' : '';
  }

  protected getEmailErrorClass(): string {
    const control = this.form.get('email');
    return control?.hasError('pattern') ? 'login-form__hint' : 'login-form__error';
  }

  protected getPasswordError(): string {
    const control = this.form.get('password');
    if (!control || !(control.touched || control.dirty)) return '';
    if (control.hasError('required')) return 'La contraseña es obligatoria.';
    return control.hasError('minlength') ? 'La contraseña debe tener al menos 8 caracteres.' : '';
  }

  protected togglePassword(): void {
    this.showPassword.set(!this.showPassword());
  }

  protected submit(): void {
    if (this.isLoading()) return;
    this.loginError.set('');
    this.loginSuccess.set('');

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);
    this.shake.set(false);

    setTimeout(() => {
      this.isLoading.set(false);
      const { email, password, remember } = this.form.value as {
        email: string;
        password: string;
        remember: boolean;
      };

      const storedUser = this.getStoredUser();
      const validEmail = storedUser?.email?.toLowerCase() === email.toLowerCase();
      const validPassword = storedUser?.password === password;

      if (storedUser && validEmail && validPassword) {
        this.loginSuccess.set('Inicio de sesión exitoso. Bienvenido de nuevo.');
        if (remember) {
          localStorage.setItem('neophysis-login', JSON.stringify({ email }));
        } else {
          localStorage.removeItem('neophysis-login');
        }
      } else {
        this.loginError.set('Credenciales incorrectas. Revisa tu correo o contraseña.');
        this.shake.set(true);
        setTimeout(() => this.shake.set(false), 420);
      }
    }, 1400);
  }

  private getStoredUser(): { email: string; password: string } | null {
    const saved = localStorage.getItem('neophysis-user');
    if (!saved) return null;

    try {
      return JSON.parse(saved) as { email: string; password: string };
    } catch {
      return null;
    }
  }
}

