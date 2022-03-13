package com.techelevator.dao;

import com.techelevator.model.Beer;
import java.util.List;

public interface BeerDao {
	Beer addNewBeer(Beer newBeer);

	List<Beer> getAllBeer();
	Beer getBeerByID(Long beerId);
	List <Beer> getBeerByBreweryID(Long breweryId);

	void updateBeer(Beer aBeer);

	void deleteBeer(Long beerId);

}
