package com.example.demo.dao;

 

import org.springframework.data.jpa.repository.JpaRepository;

 

import com.example.demo.model.Subscription;

 

public interface SubscriptionRepository extends JpaRepository<Subscription, Integer>{

 


    boolean existsByLearnerid(int learnerid);

 

}