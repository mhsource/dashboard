import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesPageComponent } from './tables-page.component';
import { TablesRoutingModule } from './tables-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TablesService } from '../../shared/services/tables.service';

@NgModule({
  declarations: [
    TablesPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TablesRoutingModule
  ],
  providers: [
    TablesService
  ]
})
export class TablesModule { }
