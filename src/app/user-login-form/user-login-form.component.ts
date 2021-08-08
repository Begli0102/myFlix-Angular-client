import { Component, OnInit,Input } from '@angular/core';

// To import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

// This import brings in the API calls we created in 6.2
import { UserLoginService } from '../fetch-api-data.service';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = { Username: '', Password: ''};

  constructor(
      public fetchApiData: UserLoginService,
      public dialogRef: MatDialogRef<UserLoginFormComponent>,
      public snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }
  
  // This is the function responsible for sending the form inputs to the backend
  loginUser(): void {
      this.fetchApiData.userLogin(this.userData).subscribe((result) => {
    // Logic for a successful user login goes here! (To be implemented)
    console.log("This is the result" + result)
       this.dialogRef.close(); // This will close the modal on success!
       this.snackBar.open(result, 'OK', {
          duration: 2000
       });
      }, (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000
        });
      });
    }
  


}
