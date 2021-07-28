package com.example.demo.dao;

 

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

 

import com.example.demo.model.Review;

 

public interface ReviewRepository extends JpaRepository<Review, Integer> {

 

    Review getByLearneridAndCourseid(int learnerid, int courseid);

	List<Review> findByCourseid(int courseid);

 

    
}