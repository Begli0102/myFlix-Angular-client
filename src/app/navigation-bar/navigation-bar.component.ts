import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

/**
 * 
 * @param snackBar 
 * @param router 
 */

  constructor(public snackBar: MatSnackBar, public router: Router) { }

  ngOnInit(): void {
  }

/**
 * Allow to log out a user
 */

  logOutUser(): void {
    localStorage.clear();
    this.router.navigate(['welcome']);
    this.snackBar.open('You have logged out succesfully', 'OK', {
      duration: 4000,
    });
  }

}
