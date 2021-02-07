package com.example.testProject.controllers;

import com.example.testProject.data.EmployeeRepository;
import com.example.testProject.model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeRepository employeeRepository;

    @GetMapping(value = "/all", produces = "application/json")
    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public Employee addEmployee(@RequestBody Employee employee) {
        return  employeeRepository.saveAndFlush(employee);
    }
}
