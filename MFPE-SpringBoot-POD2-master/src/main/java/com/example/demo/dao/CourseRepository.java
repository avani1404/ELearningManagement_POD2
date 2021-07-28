package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Course;

public interface CourseRepository extends JpaRepository< Course, Integer> {

	public List<Course> findByVendorid(int id);
	public List<Course> findByService(String s);
	public List<Course> findByVendoridAndService(int vendorid, String service);
}
