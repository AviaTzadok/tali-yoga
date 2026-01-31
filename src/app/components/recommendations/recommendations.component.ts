import { Component, inject, signal, computed, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query } from '@angular/animations';
import { YogaDataService } from '../../services/yoga-data.service';
import { IRecommendation } from '../../models/recommendation.interface';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css',
  animations: [
    trigger('slideAnimation', [
      transition('* => next', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0%)', opacity: 1 }))
      ]),
      transition('* => prev', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('600ms cubic-bezier(0.4, 0, 0.2, 1)', style({ transform: 'translateX(0%)', opacity: 1 }))
      ])
    ])
  ]
})
export class RecommendationsComponent implements OnInit, OnDestroy {
  private readonly yogaDataService = inject(YogaDataService);
  readonly recommendations = this.yogaDataService.getRecommendations();
  
  private autoSwitchInterval?: number;
  private readonly autoSwitchDelay = 5000; // 5 seconds
  
  readonly currentIndex = signal(0);
  readonly direction = signal<'next' | 'prev'>('next');
  readonly animationState = computed(() => `${this.currentIndex()}-${this.direction()}`);
  
  readonly currentRecommendation = computed(() => {
    const recs = this.recommendations();
    const index = this.currentIndex();
    return recs[index] || recs[0];
  });

  readonly hasNext = computed(() => {
    const recs = this.recommendations();
    return recs.length > 0;
  });

  readonly hasPrevious = computed(() => {
    const recs = this.recommendations();
    return recs.length > 0;
  });

  readonly currentPage = computed(() => this.currentIndex() + 1);
  readonly totalPages = computed(() => this.recommendations().length);

  nextRecommendation(): void {
    const recs = this.recommendations();
    const currentIdx = this.currentIndex();
    const nextIdx = (currentIdx + 1) % recs.length;
    this.direction.set('next');
    this.currentIndex.set(nextIdx);
    this.resetAutoSwitch();
  }

  previousRecommendation(): void {
    const recs = this.recommendations();
    const currentIdx = this.currentIndex();
    const prevIdx = (currentIdx - 1 + recs.length) % recs.length;
    this.direction.set('prev');
    this.currentIndex.set(prevIdx);
    this.resetAutoSwitch();
  }

  goToRecommendation(index: number): void {
    const recs = this.recommendations();
    if (index >= 0 && index < recs.length) {
      const currentIdx = this.currentIndex();
      const targetIdx = index;
      // Determine direction based on index comparison
      if (targetIdx > currentIdx || (currentIdx === recs.length - 1 && targetIdx === 0)) {
        this.direction.set('next');
      } else {
        this.direction.set('prev');
      }
      this.currentIndex.set(index);
      this.resetAutoSwitch();
    }
  }

  ngOnInit(): void {
    this.startAutoSwitch();
  }

  ngOnDestroy(): void {
    this.stopAutoSwitch();
  }

  private startAutoSwitch(): void {
    this.stopAutoSwitch();
    this.autoSwitchInterval = window.setInterval(() => {
      this.nextRecommendation();
    }, this.autoSwitchDelay);
  }

  private stopAutoSwitch(): void {
    if (this.autoSwitchInterval) {
      clearInterval(this.autoSwitchInterval);
      this.autoSwitchInterval = undefined;
    }
  }

  private resetAutoSwitch(): void {
    this.startAutoSwitch();
  }

  onMouseEnter(): void {
    this.stopAutoSwitch();
  }

  onMouseLeave(): void {
    this.startAutoSwitch();
  }
}
