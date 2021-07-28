package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="purchase")
public class Purchase {
	
	@Id
	private int purchaseid;
	private int vendorid;
	private int learnerid;
	private int courseid;
	private String status;
	public int getPurchaseid() {
		return purchaseid;
	}
	public void setPurchaseid(int purchaseid) {
		this.purchaseid = purchaseid;
	}
	public int getVendorid() {
		return vendorid;
	}
	public void setVendorid(int vendorid) {
		this.vendorid = vendorid;
	}
	public int getLearnerid() {
		return learnerid;
	}
	public void setLearnerid(int learnerid) {
		this.learnerid = learnerid;
	}
	public int getCourseid() {
		return courseid;
	}
	public void setCourseid(int courseid) {
		this.courseid = courseid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Purchase(int purchaseid, int vendorid, int learnerid, int courseid, String status) {
		super();
		this.purchaseid = purchaseid;
		this.vendorid = vendorid;
		this.learnerid = learnerid;
		this.courseid = courseid;
		this.status = status;
	}
	
	public Purchase() {}
}
