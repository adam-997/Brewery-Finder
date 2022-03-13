package com.techelevator.dao;

import com.techelevator.model.Review;

import javax.validation.Valid;
import java.util.List;

public interface ReviewDao {
	Review addReview(Review aReview);
	void saveReview(@Valid Review review);

	List<Review> getAllReviews();
    List<Review> getReviews(Long beer_id);
	List<Review> searchReviewsByBeerId(long beerId);

	void updateReview(Review aReview);

	void deleteAllReviewsByBeerId(Long beer_id);
}
