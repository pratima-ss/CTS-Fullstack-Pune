import { EMPLOYEES } from './../mock-employees';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from '../emp';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EmpComponent implements OnInit {
emps=EMPLOYEES;
selectedEmp=Employee;

  constructor() { }

  ngOnInit() {
  }

}
