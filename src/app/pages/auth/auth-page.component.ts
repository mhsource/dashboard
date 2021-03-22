import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent {

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  public sendLoginForm(): void {
    this.service.login();
    this.router.navigate(['tables']).then();
  }





}
