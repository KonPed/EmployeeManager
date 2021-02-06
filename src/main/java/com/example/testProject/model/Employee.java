package com.example.testProject.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Employee implements Serializable {
    @Id
    private Long id;
    @Column
    private String name;
    @Column
    private String lastName;
    @Column
    private String email;
    @Column
    private String jobTitle;
    @Column
    private String phone;
    @Column
    private String imageUrl;
    @Column
    private String employeeCode;

}
