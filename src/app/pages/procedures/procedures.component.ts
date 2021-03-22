import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TablesService } from '../../shared/services/tables.service';
import { Employee } from '../../shared/models/employee';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.component.html',
  styleUrls: ['./procedures.component.scss']
})
export class ProceduresComponent {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  public employeeTableData$: Observable<Employee[]>
  public employeeTableData: Employee[];
  public displayedColumns: string[] = ['select', 'name', 'company', 'city', 'state'];
  public dataSource: MatTableDataSource<Employee>;
  public selection = new SelectionModel<Employee>(true, []);
  public isShowFilterInput = false;
  


  constructor(private service: TablesService) {
    this.employeeTableData$ = service.loadEmployeeTableData();
    this.teste()
  }

async teste (){
  this.employeeTableData = await this.service.loadEmployeeTableData().toPromise()
  this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData);
  this.dataSource.paginator = this.paginator;
}

/** Whether the number of selected elements matches the total number of rows. */
public isAllSelected(): boolean {
  const numSelected = this.selection.selected.length;
  const numRows = this.dataSource.data.length;
  return numSelected === numRows;
}

/** Selects all rows if they are not all selected; otherwise clear selection. */
public masterToggle(): void {
  this.isAllSelected() ?
    this.selection.clear() :
    this.dataSource.data.forEach(row => this.selection.select(row));
}

/** The label for the checkbox on the passed row */
public checkboxLabel(row?: any): string {
  if (!row) {
    return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
  }
  return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}

public applyFilter(event: Event): void {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

public showFilterInput(): void {
  this.isShowFilterInput = !this.isShowFilterInput;
  this.dataSource = new MatTableDataSource<Employee>(this.employeeTableData);
}

}
