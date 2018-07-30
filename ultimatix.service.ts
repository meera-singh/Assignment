import { Injectable } from '@angular/core';
import { Employee } from './ultimatix/ultimatix'

@Injectable({
  providedIn: 'root'
})
export class UltimatixService {

  constructor() { }

  getEmployees(): Employee[] {
    return [{
      emp_id: 1243948,
      emp_name: "Rohit",
      emp_desig: "ASE",
      emp_contno: 35748949,
      emp_doj: "04/04/2014",
      emp_address: "Gurgaon"
    },
    {
      emp_id: 1242948,
      emp_name: "Akshay",
      emp_desig: "ASE",
      emp_contno: 357482949,
      emp_doj: "04/07/2014",
      emp_address: "Delhi"
    }];
  }
}

