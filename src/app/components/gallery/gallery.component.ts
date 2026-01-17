import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YogaDataService } from '../../services/yoga-data.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  private readonly yogaDataService = inject(YogaDataService);
  readonly galleryImages = this.yogaDataService.getGalleryImages();
}

