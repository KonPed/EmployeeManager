package com.example.testProject.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity(name = "EMPLOYEES")
public class Employee implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;
    @Column(name = "name")
    private String name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "email", nullable = false, unique = true)
    private String email;
    @Column(name = "job_title")
    private String job_title;
    @Column(name = "phone", unique = true)
    private String phone;
    @Column(name = "image_url")
    private String image_url;
    @Column(name = "employee_code")
    private String employee_code;

    public Employee() {
    }

    public Employee(Long id, String name, String last_name, String email, String job_title, String phone, String image_url, String employee_code) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.job_title = job_title;
        this.phone = phone;
        this.image_url = image_url;
        this.employee_code = employee_code;
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

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public String getEmployee_code() {
        return employee_code;
    }

    public void setEmployee_code(String employee_code) {
        this.employee_code = employee_code;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", job_title='" + job_title + '\'' +
                ", phone='" + phone + '\'' +
                ", image_url='" + image_url + '\'' +
                ", employee_code='" + employee_code + '\'' +
                '}';
    }
}
