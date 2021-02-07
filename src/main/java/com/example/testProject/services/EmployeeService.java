package com.example.testProject.services;

import com.example.testProject.models.Employee;

import java.util.List;

public interface EmployeeService {
    Employee save(Employee employee);
    List<Employee> findAll();
}
