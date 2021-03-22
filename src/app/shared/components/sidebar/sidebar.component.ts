import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  public menus;
  constructor(private service:MenuService){
    this.buscarmenu()
  }

  async buscarmenu(){
    let menus = await this.service.getUser()
    this.menus = menus['menu']
  }

}
