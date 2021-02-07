package com.example.testProject.services;

import com.example.testProject.Exceptions.UserNotFoundException;
import com.example.testProject.models.Employee;

import java.util.List;

public interface EmployeeService {
    Employee addEmployee(Employee employee);
    List<Employee> findAllEmployees();
    Employee findEmployeeByName(String employeeName) throws UserNotFoundException;
}
