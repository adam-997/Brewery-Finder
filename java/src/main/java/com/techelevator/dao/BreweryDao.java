package com.techelevator.dao;

import java.util.List;

import com.techelevator.model.Brewery;

public interface BreweryDao {
   List<Brewery> getAllBreweries();

	Brewery getBreweryById(Long breweryId);

	void addNewBrewery(Brewery aBrewery);

	void updateBrewery(Brewery aBrewery);

	void deleteBrewery(Long breweryId);

	List<Brewery> getBreweryByUserID(Long userId);
}
