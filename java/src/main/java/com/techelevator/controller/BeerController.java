package com.techelevator.controller;

import com.techelevator.dao.beerDao;
import com.techelevator.dao.breweryDao;
import com.techelevator.dao.reviewDao;
import com.techelevator.model.Beer;
import com.techelevator.model.Brewery;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin 
public class BeerController {
	@Autowired
	private beerDao beerDAO;
	
	@Autowired
	private breweryDao breweryDAO;
	
	@Autowired
	private reviewDao reviewDAO;
	
	
	/****************************************
	 * Controller
	 *
	 ***/
	
	public BeerController(beerDao beerDAO) {
		this.beerDAO = beerDAO;
	}
	
	/****************************************
	 * Request Mapping, shows beers
	 *
	 ***/
	
	@PreAuthorize("permitAll")
	@RequestMapping(path="/beers", method=RequestMethod.GET)
	public List<Beer> showAllBeers(ModelMap modelHolder) {
		List<Beer> beerList = beerDAO.getAllBeer();
		List<Brewery> breweries = breweryDAO.getAllBreweries();
		
		modelHolder.put("allBeers", beerList);
		modelHolder.put("allBreweries", breweries);
		return beerList;
	}
	
	/****************************************
	 * Request Mapping, show a beer by beerId
	 *
	 ***/
	
	@PreAuthorize("permitAll")
	@RequestMapping(path="/beers/{beerId}", method = RequestMethod.GET)
	public Beer getBeerByID(@PathVariable Long beerId) throws NotFoundException {
		return beerDAO.getBeerbyID(beerId);
	}
	
	/****************************************
	 * Request Mapping, add Beer
	 *
	 ***/
	
	//@PreAuthorize("hasRole('ROLE_BREWER')")
	@RequestMapping(path="/addBeer", method=RequestMethod.GET)
	public String showAddBeer() throws NotAllowedException {
		return "addBeer";
	}
	
	/****************************************
	 * Request Mapping, delete Beer
	 *
	 ***/
	//@PreAuthorize("hasRole('ROLE_BREWER')")
	@RequestMapping(path = "/beers/{beerId}", method = RequestMethod.DELETE)
	public void deleteABeer(@PathVariable Long beerId) throws NotAllowedException {
		beerDAO.deleteBeer(beerId);
	}
	
	/****************************************
	 * For Beads, getBeerByBreweryId 
	 *
	 ***/
	
	@PreAuthorize("permitAll")
	@RequestMapping(path="/breweries/{breweryId}/beers", method = RequestMethod.GET)
	public List<Beer> getBeerByBreweryID(@PathVariable Long breweryId) throws NotFoundException {
		return beerDAO.getBeerByBreweryID(breweryId);
	}
	
	/****************************************
	 * Update a beer
	 * - preauth "Brewer"
	 *
	 ***/
	//@PreAuthorize("hasRole('ROLE_BREWER')")
	@RequestMapping(path= "/beers", method = RequestMethod.PUT)
	public void updateBeer(@RequestBody Beer aBeer) throws NotAllowedException {
		beerDAO.updateBeer(aBeer);
	}
	
	
}
