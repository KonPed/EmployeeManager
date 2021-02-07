package com.example.testProject.services;

import com.example.testProject.Exceptions.UserNotFoundException;
import com.example.testProject.data.EmployeeRepository;
import com.example.testProject.models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    @Override
    public Employee addEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public List<Employee> findAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee findEmployeeByName(String employeeName) throws UserNotFoundException {
        return employeeRepository.findEmployeeByName(employeeName).orElseThrow(() -> new UserNotFoundException("User with name " + employeeName + " was not found."));
    }
}
