import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Movies} from '../models/Movies';

const enum endpoint  {
  latest = '/movie/latest',
  now_playing = '/movie/now_playing',
  popular = '/movie/popular',
  top_rated = '/movie/top_rated',
  upcoming = '/movie/upcoming',
  trending = '/movie/trending',
  originals = '/movie/originals'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  public URL = 'https://api.themoviedb.org/3';
  public API = environment.api;

  constructor(private http: HttpClient) {}

  playingMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.now_playing}`, {
      params: {api_key: this.API}
    });
  }

  popularMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.popular}`, {
      params: {api_key: this.API}
    });
  }

  topRatedMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.top_rated}`, {
      params: {api_key: this.API}
    });
  }

  upcomingMovie(): Observable<Movies> {
    return this.http.get<Movies>(`${this.URL}${endpoint.upcoming}`, {
      params: {api_key: this.API}
    });
  }

}
