import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditUserService } from '../fetch-api-data.service';

@Component({
  selector: 'app-user-profile-update',
  templateUrl: './user-profile-update.component.html',
  styleUrls: ['./user-profile-update.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UserProfileUpdateComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * 
   * @param fetchUserData 
   * @param dialogRef 
   * @param snackBar 
   */

  constructor(
    public fetchUserData: EditUserService,
    public dialogRef: MatDialogRef<UserProfileUpdateComponent>,
    public snackBar: MatSnackBar


  ) { }

  ngOnInit(): void {
  }
  
  editUser(): void {
    this.fetchUserData. EditUserInfo(this.userData).subscribe((res) => {
      this.dialogRef.close();
      localStorage.setItem('user', res.Username);
      this.snackBar.open('Profile updated successfully!', 'Ok', {
        duration: 2000
      });
    }, (res) => {
      console.log(res);
      this.snackBar.open(res, 'Ok', {
        duration: 2000
      });
    });
    // setTimeout(function () {
    //   window.location.reload();
    // }, 1000);
  }
}