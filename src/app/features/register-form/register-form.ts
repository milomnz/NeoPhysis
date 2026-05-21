/** @autor LaMendez */

import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Avatar {
  label: string;
  src: string;
}

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './register-form.html',
  styleUrl: './register-form.scss',
})
export class RegisterFormComponent {
  protected readonly usernameStatus = signal<'idle' | 'checking' | 'available' | 'taken'>('idle');
  protected readonly usernameMessage = signal('Elige un nombre de usuario único.');
  protected readonly isSubmitting = signal(false);
  protected readonly registrationSuccess = signal('');
  private usernameCheckTimeout?: ReturnType<typeof setTimeout>;
  protected readonly form;

  protected getPasswordStrength(): 'fuerte' | 'media' | 'débil' {
    const password = this.form.get('password')?.value ?? '';
    const strength = [/[a-z]/, /[A-Z]/, /\d/, /[\W_]/].reduce((count, regex) => (regex.test(password) ? count + 1 : count), 0);
    if (password.length >= 12 && strength >= 3) return 'fuerte';
    if (password.length >= 8 && strength >= 2) return 'media';
    return 'débil';
  }

  protected getPasswordHint(): string {
    const strength = this.getPasswordStrength();
    if (strength === 'fuerte') return 'Excelente, tu contraseña es robusta.';
    if (strength === 'media') return 'Buena, añade mayúsculas o símbolos para mejorarla.';
    return 'Débil. Usa al menos 8 caracteres con números y símbolos.';
  }

  protected passwordsMatch(): boolean {
    const password = this.form.get('password')?.value;
    const confirmPassword = this.form.get('confirmPassword')?.value;
    return !!password && !!confirmPassword && password === confirmPassword;
  }

  constructor(private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/@/)]],
      location: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
    });

    this.form.get('username')?.valueChanges.subscribe((value) => this.checkUsername(value));
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
    return control?.hasError('pattern') ? 'register-form__helper' : 'register-form__error';
  }

  protected getPasswordStrengthClass(): string {
    const value = this.getPasswordStrength();
    return `register-form__strength--${value}`;
  }

  protected canSubmit(): boolean {
    return this.form.valid && this.passwordsMatch();
  }

  protected submit(): void {
    if (this.isSubmitting()) return;
    this.registrationSuccess.set('');

    if (!this.form.valid || !this.passwordsMatch()) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    setTimeout(() => {
      const value = this.form.value as {
        firstName: string;
        lastName: string;
        email: string;
        location: string;
        username: string;
        password: string;
      };
      const storedUser = {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        location: value.location,
        username: value.username,
        password: value.password,
      };
      localStorage.setItem('neophysis-user', JSON.stringify(storedUser));
      this.registrationSuccess.set('Cuenta creada con éxito. ¡Puedes iniciar sesión ahora!');
      this.isSubmitting.set(false);
      this.form.reset();
      this.usernameStatus.set('idle');
      this.usernameMessage.set('Elige un nombre de usuario único.');
    }, 1400);
  }

  private checkUsername(value: string | null): void {
    clearTimeout(this.usernameCheckTimeout);
    if (!value || value.length < 3) {
      this.usernameStatus.set('idle');
      this.usernameMessage.set('El nombre de usuario debe tener al menos 3 caracteres.');
      return;
    }

    this.usernameStatus.set('checking');
    this.usernameMessage.set('Verificando disponibilidad...');

    this.usernameCheckTimeout = setTimeout(() => {
      const takenNames = ['labguru', 'science', 'admin', 'neophysis'];
      const taken = takenNames.includes(value.toLowerCase());
      this.usernameStatus.set(taken ? 'taken' : 'available');
      this.usernameMessage.set(taken ? 'Este nombre de usuario no está disponible.' : 'Nombre de usuario disponible.');
    }, 900);
  }
}

