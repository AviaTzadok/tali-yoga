import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaDataService } from '../../services/yoga-data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  private readonly yogaDataService = inject(YogaDataService);
  readonly yogaClasses = this.yogaDataService.getYogaClasses();

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

