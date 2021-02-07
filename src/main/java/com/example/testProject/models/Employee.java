package com.example.testProject.models;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "Employees_manager_employee")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "job_title")
    private String jobTitle;
    @Column(name = "phone", unique = true)
    private String phone;
    @Column(name = "image_url")
    private String imageUrl;
    @Column(name = "employee_code")
    private String employeeCode;

    public Employee() {
    }

    public Employee(String name, String last_name, String email, String job_title, String phone, String image_url, String employee_code) {
        this.name = name;
        this.lastName = last_name;
        this.email = email;
        this.jobTitle = job_title;
        this.phone = phone;
        this.imageUrl = image_url;
        this.employeeCode = employee_code;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String last_name) {
        this.lastName = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJobTitle() {
        return jobTitle;
    }

    public void setJobTitle(String job_title) {
        this.jobTitle = job_title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String image_url) {
        this.imageUrl = image_url;
    }

    public String getEmployeeCode() {
        return employeeCode;
    }

    public void setEmployeeCode(String employee_code) {
        this.employeeCode = employee_code;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", last_name='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", job_title='" + jobTitle + '\'' +
                ", phone='" + phone + '\'' +
                ", image_url='" + imageUrl + '\'' +
                ", employee_code='" + employeeCode + '\'' +
                '}';
    }
}
