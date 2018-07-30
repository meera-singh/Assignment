import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './ultimatix/ultimatix';

@Pipe({
  name: 'empFilter'
})
export class EmpFilterPipe implements PipeTransform {

  transform(employee: Employee [], search1: string): Employee[] {
    if(!employee || !search1){
      return employee;
    }
    return employee.filter(emp =>
      emp.emp_name.toLowerCase().indexOf(search1.toLowerCase() )!==-1);
  }

}
