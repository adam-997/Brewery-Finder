package com.techelevator.dao;

import com.techelevator.model.Review;

import javax.validation.Valid;
import java.util.List;

public interface ReviewDao {
	List<Review> getReviews(Long beer_id);
	
	void addReview(Review aReview);

	void saveReview(@Valid Review review);

	List<Review> searchReviewsByBeerId(long beerId);
}
