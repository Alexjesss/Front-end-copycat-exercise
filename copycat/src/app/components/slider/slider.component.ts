import { Component, OnInit, Input } from '@angular/core';
import { Movies } from '../models/Movies';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() sliderConfig;
  @Input() movies: Movies;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
