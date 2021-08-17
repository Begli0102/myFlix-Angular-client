import { Component, OnInit } from '@angular/core';

import { GetAllMoviesService } from '../fetch-api-data.service';
import { AddMovieService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { DetailsComponent } from '../details/details.component';
import { DirectorComponent } from '../director/director.component';
import { GenreComponent } from '../genre/genre.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];

/**
 * 
 * @param fetchApiData 
 * @param fetchApiData2 
 * @param dialog 
 * @param snackBar 
 */

  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiData2: AddMovieService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    ) { }

ngOnInit(): void {
  this.getMovies();
}

/**
 * Allow to get all movies
 */

getMovies(): void {
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }

/**
 * 
 * @param title 
 * @param imagePath 
 * @param description 
 * @param director 
 * @param genre 
 */

  showDetails(
    title: string,
    imagePath: string,
    description: string,
    director: string,
    genre: string
  ): void {
    this.dialog.open(DetailsComponent, {
      data: { title, imagePath, description, director, genre },
      panelClass: 'details-dialog',
    });
  }

  /**
   * 
   * @param name 
   * @param description 
   */

  showGenre(name: string, description: string): void {
    this.dialog.open(GenreComponent, {
      data: { name, description },
      panelClass: 'genre-dialog',
    });
  }


  /**
   * 
   * @param name 
   * @param bio 
   * @param birth 
   * @param death 
   */
  showDirector(
    name: string,
    bio: string,
    birth: string,
    death: string
  ): void {
    this.dialog.open(DirectorComponent, {
      data: { name, bio, birth, death },
      panelClass: 'director-dialog',
    });
  }


  /**
   * 
   * @param id 
   * @param title 
   */
  addFavorite(id: string, title: string): void {
    this.fetchApiData2.addFavMovie(id).subscribe((resp: any) => {
      console.log(resp);
      let favmovies = resp.FavoriteMovies;
      // localStorage.setItem('FavoriteMovies', favmovies);
      this.snackBar.open(`${title} has been added to your favorite movies list`, 'OK', {
        duration: 3000,
      });
    });

  }

}
