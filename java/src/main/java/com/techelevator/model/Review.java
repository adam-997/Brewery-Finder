package com.techelevator.model;

import java.sql.Timestamp;
import java.time.LocalDateTime;

public class Review {
	private Long reviewsId;
	private Long userId;
	private Long beerId;
	private int rating;
	private Timestamp createDate;
	private String name;
	private String description;

	public Long getReviewsId() {
		return reviewsId;
	}
	public void setReviewsId(Long reviewsId) {
		this.reviewsId = reviewsId;
	}

	public Long getUserId() {
		return userId;
	}
	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public Long getBeerId() {
		return beerId;
	}
	public void setBeerId(Long beerId) {
		this.beerId = beerId;
	}

	public int getRating() {
		return rating;
	}
	public void setRating(int rating) {
		this.rating = rating;
	}

	public Timestamp getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Timestamp createDate) {
		this.createDate = createDate;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
}
