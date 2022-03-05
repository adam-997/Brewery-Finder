package com.techelevator.controller;

import com.techelevator.dao.ReviewDao;
import com.techelevator.dao.BeerDao;
import com.techelevator.model.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin
@RestController
public class ReviewController {

	@Autowired
	ReviewDao reviewDAO;
	
	@Autowired
	BeerDao beerDAO;
	
	public ReviewController(ReviewDao reviewDAO) {
		this.reviewDAO = reviewDAO;
	}
	
	@RequestMapping(path = "/reviews/{beerId}", method = RequestMethod.GET)
	public List<Review> getReviews(@PathVariable Long beerId) throws NotFoundException {
		return reviewDAO.getReviews(beerId);
	}
	
	@RequestMapping(path = "/reviews", method = RequestMethod.POST)
	public void addReviews(@RequestBody Review aReview) throws NotAllowedException {
		reviewDAO.addReview(aReview);
	}
	
	@RequestMapping(path="/beerDetails/{id}/review", method=RequestMethod.POST)
	public String createNewMessage(@PathVariable("id") long beerId, @Valid @ModelAttribute("newReview") Review review, BindingResult result, RedirectAttributes flash) throws NotFoundException {
		flash.addFlashAttribute("newReview", review);
		
		if (beerDAO.getBeerbyID(beerId) == null) {
			throw new NotFoundException();
		}
		
		if(result.hasErrors()) {
			flash.addFlashAttribute(BindingResult.MODEL_KEY_PREFIX + "newReview", result);
			return "redirect://beerDetails/{id}/review";
		}
		review.setCreateTime(LocalDateTime.now());
		
		reviewDAO.saveReview(review);
		
		return "redirect:/beerDetails/"+ beerId;
	}
}
