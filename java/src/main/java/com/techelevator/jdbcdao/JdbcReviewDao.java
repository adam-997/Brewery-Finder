package com.techelevator.jdbcdao;

import com.techelevator.dao.reviewDao;
import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcReviewDao implements reviewDao{
	
	private JdbcTemplate jdbcTemplate;
	
	public JdbcReviewDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
	}
	
	//GET REVIEWS BY ID
	@Override
	public List<Review> getReviews(Long beerId){
		 List<Review> reviews = new ArrayList<>();
		 String sqlGetReviewByBeerId = "SELECT * FROM reviews WHERE beer_id = ? ORDER BY create_date";
		 SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByBeerId, beerId);
		 
		 while(results.next()) {
			 Review aReview = mapRowToReview(results);
			 reviews.add(aReview);
		 }
		 return reviews;
	}
	
	//ADD A REVIEW
	
	@Override
	public void addReview(Review aReview) {
		String sqladdReview = "INSERT INTO reviews (description, rating, beer_id, user_id, name) VALUES (?,?,?,?,?)";
		jdbcTemplate.update(sqladdReview, aReview.getDescription(), aReview.getRating(), aReview.getBeerId(),aReview.getUserId(), aReview.getName());
	}
	
	
	// why is this method here?
	@Override
	public void saveReview(@Valid Review review) {
		String sqlSaveReview = "INSERT INTO reviews(description, rating, create_date, beer_id) VALUES(?,?,?,?)";
		jdbcTemplate.update(sqlSaveReview, review.getDescription(), review.getRating(), 
				review.getCreateTime(), review.getBeerId());
		
	}
	
	// GET REVIEWS BY BEER ID
	
	@Override
	public List<Review> searchReviewsByBeerId(long beerId) {
		List<Review> reviewList = new ArrayList<>();
		String sqlSearchReviewByBeerId = "SELECT * FROM reviews WHERE beer_id = ? ORDER BY create_date";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlSearchReviewByBeerId, beerId);
		
		while(results.next()){
			reviewList.add(mapRowToReview(results));
		}
		
		
		return reviewList;
	}
	
	//MAP ROW TO REVIEW

	private Review mapRowToReview(SqlRowSet row) {
		Review review = new Review();
		
		review.setId(row.getLong("reviews_id"));
		review.setName(row.getString("name"));
		review.setDescription(row.getString("description"));
		review.setRating(row.getInt("rating"));
		//review.setCreateTime(row.getTimestamp("create_date").toLocalDateTime());
		review.setBeerId(row.getLong("beer_id"));
		review.setUserId(row.getLong("user_id"));
		return review;
	}

}
