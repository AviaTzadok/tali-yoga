import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { YogaDataService } from '../../services/yoga-data.service';
import { IContactForm } from '../../models/contact.interface';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private readonly formBuilder = inject(FormBuilder);
  private readonly yogaDataService = inject(YogaDataService);
  
  readonly contactInfo = this.yogaDataService.getContactInfo();
  readonly isSubmitting = signal(false);
  readonly isSubmitted = signal(false);

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9,10}$/)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      // Simulate form submission
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
        this.contactForm.reset();
        setTimeout(() => {
          this.isSubmitted.set(false);
        }, 5000);
      }, 1000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.hasError('required') && field?.touched) {
      return 'שדה זה חובה';
    }
    if (field?.hasError('email') && field?.touched) {
      return 'כתובת אימייל לא תקינה';
    }
    if (field?.hasError('minlength') && field?.touched) {
      return 'התוכן קצר מדי';
    }
    if (field?.hasError('pattern') && field?.touched) {
      return 'מספר טלפון לא תקין';
    }
    return '';
  }
}

