import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { ProfileInfo } from '../../models/profile-info';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private firebaseService: FirebaseService,
    private router: Router) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.firebaseService.loginWithFacebook().then((data: ProfileInfo) => {
      this.router.navigate(['/home']);
      console.log('success' + data);
      console.log('success');
      console.log(data.user.displayName);
    }, (responseFail: any) => {
      this.router.navigate(['/']);
      console.log('fail : ' + responseFail);
      console.log('fail: ${responseFail}');
      console.log('fail');
      console.log(responseFail);
    });
  }

}
