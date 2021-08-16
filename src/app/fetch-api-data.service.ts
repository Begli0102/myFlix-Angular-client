import { Injectable } from '@angular/core';

import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';


export class FetchApiDataService {

  constructor() { }
}

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://myflix01025.herokuapp.com/';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  constructor(private http: HttpClient) { }

  /**
   * Allows to register
   * @param userDetails 
   * @returns Request to the database (Endpoint: 'users', Method: POST)
   */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
    .post(apiUrl + 'users', userDetails)
    .pipe(catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  constructor(private http: HttpClient) { }
 /**
  * User Login
  * @param userDetails 
  * @returns Request to the database (Endpoint: 'login', Method: POST)
  */
  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'login', userDetails)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}



@Injectable({
  providedIn: 'root'
})
export class GetAllMoviesService {
  constructor(private http: HttpClient) { }
/**
 * Allows to get all movies
 * @returns Request to the database (Endpoint: 'movies', Method: GET)
 */
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}


@Injectable({
  providedIn: 'root'
})
export class GetOneMovieService {
  constructor(private http: HttpClient) { }

  /**
   * Allows to get one movie----movies/:title
   * @returns Request to the database (Endpoint: 'movies/:title', Method: GET)
   */
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/:title', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}



@Injectable({
  providedIn: 'root'
})
export class GetDirectorService {
  constructor(private http: HttpClient) { }

/**
 * Allow to get director
 * @returns  Request to the database (Endpoint: 'movies/directors/:name', Method: GET)
 */


  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/directors/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}


@Injectable({
  providedIn: 'root'
})
export class GetGenreService {
  constructor(private http: HttpClient) { }

/**
 * Allow to get genre
 * @returns Request to the database (Endpoint: 'movies/genres/:name', Method: GET)
 */

  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/genres/:name', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        })
      })
      .pipe(map(this.extractResponseData), catchError(this.handleError));
  }
  // non-typed response extraction
  private extractResponseData(res: Response | {}): Response | {} {
    console.log(res);
    const body = res;
    return body || {};
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred: ', error.error.message);
    } else {
      console.error(
        `Error status code ${error.status}, ` + `Error body is ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later');
  }
}



@Injectable({
  providedIn: 'root'
})
export class GetUserService {
 constructor(private http: HttpClient) {
  }

  /**
   * Allow to get user info
   * @returns Request to the database (Endpoint: 'users/:username/', Method: GET)
   */

  GetUser(): Observable<any> {
    const token = localStorage.getItem('item');
   
    return this.http.get(apiUrl + `users/username`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}


@Injectable({
  providedIn: 'root'
})
export class AddMovieService { 

  constructor(private http: HttpClient) {
  }
/**
 * Allow to add user favorite movie
 * @param _id 
 * @returns Request to the database (Endpoint: 'users/:username/movies/:movieId', Method: PUT)
 */

  addFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user =localStorage.getItem('user') 
    return this.http.put(apiUrl + `users/${user}/movies/${_id}`,{} ,{
      headers: new HttpHeaders()
    .set('Authorization',  `Bearer `+ token)


      // headers: new HttpHeaders({
      //   Authorization: 'Bearer ' + token,
      // })
      }).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  // non-typed response extraction
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}



@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  constructor(private http: HttpClient) {
  }

/**
 * Alow to edit user data
 * @param userDetails 
 * @returns Request to the database (Endpoint: 'users/username', Method: PUT)
 */

  EditUserInfo(userDetails: any): Observable<any> {
    const token = localStorage.getItem('item');
    console.log(userDetails);
    return this.http.put(apiUrl + `users/username`, userDetails,  {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}


@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {

  constructor(private http: HttpClient){
  }

  /**
 * Allow to delete user
 * @returns Request to the database (Endpoint: 'users/username', Method: DELETE)
 */

  Deleteuser(): Observable<any> {
    const token = localStorage.getItem('item');
    return this.http.delete(apiUrl + `users/:username`, {headers: new HttpHeaders(
      {
        Authorization: 'Bearer ' + token,
      })}).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }

   private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}


@Injectable({
  providedIn: 'root'
})
export class DeleteFavMovieService {
  constructor(private http: HttpClient) {
  }

  /**
   * Allow to delete user favorite movies
   * @param _id 
   * @returns Request to the database (Endpoint: 'users/:username/movies/:movieId', Method: DELETE)
   */
  DeleteUserFavMovie(_id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user')
    return this.http.delete(apiUrl + `users/${user}/movies/${_id}`,{
      headers: new HttpHeaders()
      .set('Authorization',  `Bearer `+ token)
  
      // headers:  new HttpHeaders(
      // {
      //   Authorization: 'Bearer ' + token,
      // })
    }).pipe(
        map(this.extractResponseData),
        catchError(this.handleError)
      );
  }
  private extractResponseData(res: Response | Object): any {
    const body = res;
    return body || { };
}
  private handleError(error: HttpErrorResponse): any{
  if (error.error instanceof ErrorEvent) {
    console.error('Some error occurred:', error.error.message);
  } else {
    console.error(
      `Error Status code ${error.status}, ` +
      `Error body is: ${error.error}`)
  }
  return throwError(
    'Something bad happened');
  }
}

