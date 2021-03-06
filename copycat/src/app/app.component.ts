import {Component, OnInit, OnDestroy, ElementRef, ViewChild, HostListener} from '@angular/core';
import {Subscription} from 'rxjs';
import {Movies} from './components/models/Movies';
import {MovieService} from './components/services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  sticky = false;
  subs: Subscription[] = [];
  nowPlaying: Movies;
  popular: Movies;
  topRated: Movies;
  upcoming: Movies;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  @ViewChild('stickHeader') header: ElementRef;

  constructor(private movie: MovieService) {
  }


  // tslint:disable-next-line:typedef
  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

   @HostListener('document:scroll', ['$event'])
   // tslint:disable-next-line:typedef
   onWindowScroll(){
    const windowScroll = window.pageYOffset;

    if (windowScroll > this.header.nativeElement.offsetHeight){
      this.sticky = true;
    }
    else {
      this.sticky = false;
    }
   }

  // tslint:disable-next-line:typedef
  ngOnInit(): void {
    this.subs.push(this.movie.playingMovie().subscribe(data => {
      this.nowPlaying = data;
      // tslint:disable-next-line:max-line-length
    }));
    this.subs.push(this.movie.popularMovie().subscribe(data => this.popular = data));
    this.subs.push(this.movie.topRatedMovie().subscribe(data => this.topRated = data));
    this.subs.push(this.movie.upcomingMovie().subscribe(data => this.upcoming = data));

  }

}
