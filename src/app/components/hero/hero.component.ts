import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('heroVideo', { static: false }) heroVideoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroSection', { static: false }) heroSectionRef!: ElementRef<HTMLElement>;

  private intersectionObserver?: IntersectionObserver;
  readonly backgroundImageUrl = 'assets/images/hero/1000093258.jpg';

  ngAfterViewInit(): void {
    // Ensure video starts playing immediately
    setTimeout(() => {
      this.setupVideoObserver();
    }, 100);
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  private setupVideoObserver(): void {
    if (!this.heroSectionRef || !this.heroVideoRef) {
      return;
    }

    const video = this.heroVideoRef.nativeElement;
    const section = this.heroSectionRef.nativeElement;

    // Ensure video is set to autoplay and start playing immediately
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    
    // Start playing the video immediately
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // If autoplay fails, try again after user interaction
        video.load();
      });
    }

    // Create intersection observer to detect when section is visible
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is visible - play video
            video.play().catch(() => {
              // Ignore play errors
            });
          } else {
            // Section is not visible - pause video
            video.pause();
          }
        });
      },
      {
        threshold: 0.1 // Trigger when 10% of the section is visible
      }
    );

    this.intersectionObserver.observe(section);
  }

  getBackgroundImage(): string {
    // Use gradient as base, image will overlay if it exists
    return `linear-gradient(135deg, rgba(139, 115, 85, 0.7) 0%, rgba(107, 90, 66, 0.7) 100%), url(${this.backgroundImageUrl})`;
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

