import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {

    this, this.authService.login()
      .subscribe((user) => {
        console.log('user 1 here', user);
        if (user.id)
          this.router.navigate(['./heroes'])
      })


  }
  noLogin(){
    this.router.navigate(['./heroes']);
  }

}
