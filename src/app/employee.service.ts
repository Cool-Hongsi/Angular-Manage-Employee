import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './data/employee';
import { EmployeeRaw } from './data/employeeRaw';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }
  
  getEmployees() : Observable<Employee[]>{
    return this.http.get<Employee[]>("https://guarded-stream-67405.herokuapp.com/employees/");
  }

  saveEmployee(employee : EmployeeRaw) : Observable<any>{
    return this.http.put<any>("https://guarded-stream-67405.herokuapp.com/employee/"+employee._id, employee);
  }

  getEmployee(id : number) : Observable<EmployeeRaw[]>{
    return this.http.get<EmployeeRaw[]>("https://guarded-stream-67405.herokuapp.com/employee-raw/"+id);
  }
}
