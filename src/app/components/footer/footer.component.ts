import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaDataService } from '../../services/yoga-data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private readonly yogaDataService = inject(YogaDataService);
  readonly contactInfo = this.yogaDataService.getContactInfo();
}

