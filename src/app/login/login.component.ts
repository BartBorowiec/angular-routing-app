import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  isLoggedIn = this.auth.isLoggedIn$;
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(private auth: AuthService, private router: Router) { }

  login(){
    if(this.auth.login(this.username, this.password)) {
      this.router.navigate(['/home']);    }
    else {
      this.error = "Złe login lub hasło!";
    }
  }

  ngOnInit(): void {
    
  }
}
