import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from './ultimatix';
import { UltimatixService } from '../ultimatix.service';

@Component({
  selector: 'app-ultimatix',
  templateUrl: './ultimatix.component.html',
  styleUrls: ['./ultimatix.component.css']
})
export class UltimatixComponent implements OnInit {
  

constructor(private emplistdata: UltimatixService) { }
  @Input() search1: any;
  @Output() titleClicked: EventEmitter<string> = new EventEmitter<string>();
  search: string;
  empList: Employee[];
  //empFilteredList:Employee[];

  onClick(emp_name): void {
    this.titleClicked.emit(emp_name);
  }


  // get search1():string{
  //   return this._search1;
  // }

  // set search1(value:string){
  //   this._search1=this.search1;
  //   this.empFilteredList= this.empFilter(value);
  // }

  //filter logic

  // empFilter(searchString:string){
  //   return this.empList.filter(emp =>
  //     emp.emp_name.toLowerCase().indexOf(searchString.toLowerCase() )!==-1);
  pageTitle = "Employee List Component"
ngOnInit() {
  this.empList = this.emplistdata.getEmployees();
  console.log(this);
  // this.empFilteredList= this.empList;

}

}

  
