package com.techelevator.dao;

import com.techelevator.model.Review;

import javax.validation.Valid;
import java.util.List;

public interface ReviewDao {
    List<Review> getAllReviews();

	List<Review> searchReviewsByBeerId(long beerId);

    List<Review> getReviews(Long beer_id);

	void saveReview(@Valid Review review);

	Review addReview(Review aReview);

}
