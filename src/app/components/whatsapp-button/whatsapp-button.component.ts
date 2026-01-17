import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaDataService } from '../../services/yoga-data.service';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsAppButtonComponent {
  private readonly yogaDataService = inject(YogaDataService);
  readonly contactInfo = this.yogaDataService.getContactInfo();

  getWhatsAppUrl(): string {
    const phone = this.contactInfo().phone.replace(/\D/g, '');
    const message = encodeURIComponent('שלום, אני מעוניינת לקבל מידע נוסף על השיעורים');
    return `https://wa.me/972${phone}?text=${message}`;
  }
}

