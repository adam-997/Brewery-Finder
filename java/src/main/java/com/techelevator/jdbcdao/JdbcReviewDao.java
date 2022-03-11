package com.techelevator.jdbcdao;

import com.techelevator.dao.ReviewDao;
import com.techelevator.model.Review;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;


@Component
public class JdbcReviewDao implements ReviewDao {

	private final JdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert simpleJdbcInsert;

	public JdbcReviewDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
		this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("reviews").usingGeneratedKeyColumns("reviews_id");

	}

	@Override
	public List<Review> getAllReviews() {
		List<Review> allReviews = new ArrayList<>();
		String sqlGetAllReviews = "SELECT * FROM reviews";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetAllReviews);

		while(results.next()) {
			Review aReviews = mapRowToReview(results);
			allReviews.add(aReviews);
		}
		return allReviews;
	}

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

	@Override
	public void saveReview(@Valid Review review) {
		String sqlSaveReview = "INSERT INTO reviews(description, rating, create_date, beer_id) VALUES(?,?,?,?)";
		jdbcTemplate.update(sqlSaveReview, review.getDescription(), review.getRating(),
				review.getCreateDate(), review.getBeerId());
	}

	@Override
	public Review addReview(Review aReview) {
//		String sqlAddReview = "INSERT INTO reviews (description, rating, beer_id, user_id, name) VALUES (?,?,?,?,?)";
		SqlParameterSource parameterSource = new MapSqlParameterSource()
				.addValue("name", aReview.getName())
				.addValue("description", aReview.getDescription())
				.addValue("user_id", aReview.getUserId())
				.addValue("beer_id", aReview.getBeerId())
				.addValue("rating", aReview.getRating())
				.addValue("create_date", aReview.getCreateDate());

		int id = (int) simpleJdbcInsert.executeAndReturnKey(parameterSource);

		Review review = null;
		String sqlGetReviewByBeerId = "SELECT * FROM reviews WHERE reviews_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetReviewByBeerId, id);

		while (results.next()) {
			review = mapRowToReview(results);
		}
		return review;
	}

//		jdbcTemplate.update(sqlAddReview, aReview.getDescription(), aReview.getRating(), aReview.getBeerId(),aReview.getUserId(), aReview.getName());
	
	private Review mapRowToReview(SqlRowSet row) {
		Review review = new Review();
		review.setReviewsId(row.getLong("reviews_id"));
		review.setName(row.getString("name"));
		review.setDescription(row.getString("description"));
		review.setRating(row.getInt("rating"));
		review.setCreateDate(row.getTimestamp("create_date"));
		review.setUserId(row.getLong("user_id"));
		review.setBeerId(row.getLong("beer_id"));
		return review;
	}
}
