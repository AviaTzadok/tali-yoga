import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  private readonly sanitizer = inject(DomSanitizer);
  readonly bookingUrl = 'https://app.boostapp.co.il/lessons.php?GetUrl=6576d190b77fb';

  get safeBookingUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.bookingUrl);
  }

  openBooking(): void {
    window.open(this.bookingUrl, '_blank');
  }
}

