import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) { }
  isLoggedIn$ = this.auth.isLoggedIn$;
  ngOnInit(): void { }

  logout(): void {
    this.auth.logout();
  }
}
