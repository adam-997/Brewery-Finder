package com.techelevator.dao;

import com.techelevator.model.Beer;

import java.util.List;

public interface BeerDao {
	List<Beer> getAllBeer();

	Beer getBeerByID(Long beerId);

	void addNewBeer(Beer newBeer);

	void updateBeer(Beer aBeer);

	void deleteBeer(Long beerId);

	List <Beer> getBeerByBreweryID(Long breweryId);

}
