package com.example.testProject.controllers;

import com.example.testProject.models.Employee;
import com.example.testProject.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping(value = "/all", produces = "application/json")
    public List<Employee> getEmployees() {
        return employeeService.findAllEmployees();
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }
}
