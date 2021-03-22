import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(
    private userService: AuthService,
    private router: Router
  ) {
  }


  public signOut(): void {
    this.userService.signOut();
    this.router.navigate(['login']);
  }
}
