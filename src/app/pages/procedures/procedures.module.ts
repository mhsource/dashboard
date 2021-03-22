import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProceduresComponent } from './procedures.component';
import { ProceduresRoutingModule } from './procedures-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TablesService } from '../../shared/services/tables.service';

@NgModule({
  declarations: [
    ProceduresComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProceduresRoutingModule
  ],
  providers: [
    TablesService
  ]
})
export class ProceduresModule { }
