import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { movies } from '../movie.mock-data';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  id;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = window.location.pathname.substring(8);
      this.movie = movies[this.id - 1];
    });
  }

}
