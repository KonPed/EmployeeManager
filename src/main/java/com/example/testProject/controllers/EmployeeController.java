package com.example.testProject.controllers;

import com.example.testProject.models.Employee;
import com.example.testProject.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping(value = "/all", produces = "application/json")
    public ResponseEntity<List<Employee>> getEmployees() {
        return ResponseEntity.ok(employeeService.findAllEmployees());
    }

    @GetMapping(value = "/byName/{employeeName}", produces = "application/json")
    public Employee getEmployeeByName(@PathVariable String employeeName) throws Throwable {
        return employeeService.findEmployeeByName(employeeName);
    }

    @PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }
}
