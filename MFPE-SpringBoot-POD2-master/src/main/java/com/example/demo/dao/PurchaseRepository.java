package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.model.Purchase;
import com.example.demo.model.PurchaseDetails;

public interface PurchaseRepository extends JpaRepository<Purchase, Integer>{
	
	public List<Purchase> findByVendorid(int id);
	
	public List<Purchase> findByLearnerid(int id);
	
	
    @Query("select new com.example.demo.model.PurchaseDetails(c.courseid,c.service,c.vendorid,p.purchaseid,c.coursename) from Course c Join Purchase p on c.courseid=p.courseid and p.learnerid=?1")
    public List<PurchaseDetails> getdata(int  learnerid);

	public Purchase findByLearneridAndCourseid(int learnerid, int courseid);

}
