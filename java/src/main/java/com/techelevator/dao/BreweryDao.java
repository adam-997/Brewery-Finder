package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Brewery;

public interface BreweryDao {
	Brewery addNewBrewery(Brewery aBrewery);

	List<Brewery> getAllBreweries();
	Brewery getBreweryById(Long breweryId);
	List<Brewery> getBreweryByUserID(Long userId);

	void updateBrewery(Brewery aBrewery);

	void deleteBrewery(Long breweryId);

}
