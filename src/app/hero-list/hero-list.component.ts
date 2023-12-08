import { Component, Input } from '@angular/core';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
  @Input() heroData ?: Hero[];
}
