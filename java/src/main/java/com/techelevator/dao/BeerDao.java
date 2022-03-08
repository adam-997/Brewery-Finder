package com.techelevator.dao;

import com.techelevator.model.Beer;

import java.util.List;

public interface BeerDao {
	List<Beer> getAllBeer();

	void addNewBeer(Beer newBeer);

	void deleteBeer(Long beerId);

	Beer getBeerbyID(Long beerId);

	List <Beer> getBeerByBreweryID(Long breweryId);

	void updateBeer(Beer aBeer);
}
