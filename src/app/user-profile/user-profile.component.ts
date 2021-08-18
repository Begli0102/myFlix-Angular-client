import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { GetAllMoviesService } from '../fetch-api-data.service';
import { DeleteFavMovieService } from '../fetch-api-data.service';
import { DeleteUserService} from '../fetch-api-data.service';
import { GetUserService } from '../fetch-api-data.service';



import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

import { UserProfileUpdateComponent } from '../user-profile-update/user-profile-update.component'

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: any = {};
  movies: any[] = [];
  favorites: any = [];
/**
 * 
 * @param fetchApiData 
 * @param fetchApiData2 
 * @param fetchApiData3 
 * @param router 
 * @param snackBar 
 * @param dialog 
 */
  constructor(
    public fetchApiData: GetAllMoviesService,
    public fetchApiData2: DeleteFavMovieService,
    public fetchApiData3: DeleteUserService,
    public fetchApiUserData: GetUserService,
    public router: Router,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
    public form: MatFormFieldModule,
     public input: MatInputModule

  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Allow to get user
   */
  
getUser(): void {
  this.fetchApiUserData.GetUser().subscribe((res:any)=> {
      this.user=res;
      this.getMovies();
    })
}



  /**
   * Allows to get all movies
   */

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      this.filterFavorites();
    });
  }

  /**
   * 
   * @returns {object}
   */
  filterFavorites(): void {
    this.movies.forEach((movie: any) => {
      if (this.user.FavoriteMovies.includes(movie._id)) {
        this.favorites.push(movie);
      }
    });
    return this.favorites;
  }

/**
 * 
 * @param id 
 * @param title
 */
  removeFavorites(id: string, title: string): void {
    this.fetchApiData2. DeleteUserFavMovie(id).subscribe((resp) => {
      console.log(resp);
      let favmovies = resp.FavoriteMovies;
      // localStorage.setItem('FavoriteMovies', favmovies);
      this.snackBar.open(
        `${title} has been removed from your favourites!`,
        'OK',
        {
          duration: 2000,
        }
      );
    });
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

  /**
   * Allow to delete a user
   */

  deleteUser(): void {
    let check = confirm(
      'This will delete your profile! Are you sure you want to continue?'
    );
    if (check) {
      this.fetchApiData3.DeleteUser().subscribe(() => {
        localStorage.clear();
        this.router.navigate(['/welcome']);
        this.snackBar.open('Profile deleted', 'OK', {
          duration: 2000,
        });
      });
    } else {
      window.location.reload();
    }
  }

  /**
   * Allows to update the profile
   */

  profileUpdateDialog(): void {
    this.dialog.open(UserProfileUpdateComponent, {
      panelClass: 'update-dialog',
    });
  }


}
