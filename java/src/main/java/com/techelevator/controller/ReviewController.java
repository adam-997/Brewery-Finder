package com.techelevator.controller;

import com.techelevator.dao.ReviewDao;
import com.techelevator.dao.BeerDao;
import com.techelevator.model.Brewery;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.ModelMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.util.Calendar;
import java.util.List;

@RestController
@CrossOrigin
public class ReviewController {

	// Timestamp Source: https://alvinalexander.com/java/java-timestamp-example-current-time-now/
	// 1) create a java calendar instance
	Calendar calendar = Calendar.getInstance();

	// 2) get a java.util.Date from the calendar instance.
	//    this date will represent the current instant, or "now".
	java.util.Date now = calendar.getTime();

	// 3) a java current time (now) instance
	java.sql.Timestamp currentTimestamp = new java.sql.Timestamp(now.getTime());

	@Autowired
	ReviewDao reviewDAO;
	
	@Autowired
	BeerDao beerDAO;
	
	public ReviewController(ReviewDao reviewDAO) {
		this.reviewDAO = reviewDAO;
	}

	// **************************** GET ****************************
	@RequestMapping(path="/reviews", method=RequestMethod.GET)
	public List<Review> showAllReviews(ModelMap modelHolder) {
		List<Review> reviews = reviewDAO.getAllReviews();

		modelHolder.put("allReviews", reviews);
		return reviews;
	}

	@RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.GET)
	public List<Review> getReviews(@PathVariable Long beerId) throws NotFoundException {
		return reviewDAO.getReviews(beerId);
	}

	// **************************** POST ****************************
	@RequestMapping(path = "/reviews", method = RequestMethod.POST)
//	@PostMapping(path = "/reviews")
	public Review addReviews(@RequestBody Review aReview) throws NotAllowedException {
		return reviewDAO.addReview(aReview);
	}

	@RequestMapping(path="/beerDetails/{id}/review", method=RequestMethod.POST)
	public String createNewMessage(@PathVariable("id") long beerId, @Valid @ModelAttribute("newReview") Review review,
								   BindingResult result, RedirectAttributes flash) throws NotFoundException {
		flash.addFlashAttribute("newReview", review);

		if (beerDAO.getBeerByID(beerId) == null) {
			throw new NotFoundException();
		}

		if(result.hasErrors()) {
			flash.addFlashAttribute(BindingResult.MODEL_KEY_PREFIX + "newReview", result);
			return "redirect://beerDetails/{id}/review";
		}

		review.setCreateDate(currentTimestamp);

		reviewDAO.saveReview(review);

		return "redirect:/beerDetails/" + beerId;
	}

	// **************************** PUT ****************************
	//@PreAuthorize("hasRole('ROLE_BREWER')")
	@RequestMapping(path = "/reviews", method = RequestMethod.PUT)
	public void updateReviews(@RequestBody Review aReview) throws NotAllowedException {
		reviewDAO.updateReview(aReview);
	}

	// **************************** DELETE ****************************
	@RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.DELETE)
	public void deleteReviewsByBeerId(@PathVariable Long beerId) throws NotAllowedException{
		reviewDAO.deleteAllReviewsByBeerId(beerId);
	}

}
