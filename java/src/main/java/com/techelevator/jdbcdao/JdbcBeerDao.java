package com.techelevator.jdbcdao;

import com.techelevator.dao.BeerDao;
import com.techelevator.model.Beer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcBeerDao implements BeerDao {
	
	private final JdbcTemplate jdbcTemplate;
	private SimpleJdbcInsert simpleJdbcInsert;

	public JdbcBeerDao(DataSource dataSource) {
		this.jdbcTemplate = new JdbcTemplate(dataSource);
		this.simpleJdbcInsert = new SimpleJdbcInsert(jdbcTemplate).withTableName("beers").usingGeneratedKeyColumns("beer_id");
	}

	@Override
	public Beer addNewBeer(Beer newBeer) {
		SqlParameterSource parameterSource = new MapSqlParameterSource()
				.addValue("name", newBeer.getName())
				.addValue("abv", newBeer.getAbv())
				.addValue("ibu", newBeer.getIbu())
				.addValue("type", newBeer.getType())
				.addValue("info", newBeer.getInfo())
				.addValue("img_url", newBeer.getImgUrl())
				.addValue("brewery_id", newBeer.getBreweryId())
				.addValue("is_active", newBeer.isActive());

		int id = (int) simpleJdbcInsert.executeAndReturnKey(parameterSource);

		Beer beer = null;
		String sqlGetBreweryByBeerId = "SELECT * FROM breweries WHERE beer_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetBreweryByBeerId, id);

		while (results.next()) {
			beer = mapRowToBeer(results);
		}
		return beer;
	}

	@Override
	public List<Beer> getAllBeer() {
		List<Beer> allBeers = new ArrayList<>();
		String sqlSelectAllBeers = "SELECT * FROM beers";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlSelectAllBeers);
		
		while(results.next()) {
			Beer aBeer = mapRowToBeer(results);
			allBeers.add(aBeer);
		}
		return allBeers;
	}

	@Override
	public Beer getBeerByID(Long beerId) {
		Beer aBeer = new Beer();
		String sqlGetABeer = "SELECT * FROM beers WHERE beer_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetABeer, beerId);
		
		while(results.next()) {
			aBeer = mapRowToBeer(results);
		}
		
		return aBeer;
	}

	@Override
	public List<Beer> getBeerByBreweryID(Long breweryId) {
		List<Beer> allBeersByBreweryID = new ArrayList<>();
		String sqlGetBeerByBreweryId = "SELECT * FROM beers WHERE brewery_id = ?";
		SqlRowSet results = jdbcTemplate.queryForRowSet(sqlGetBeerByBreweryId, breweryId);

		while(results.next()) {
			Beer aBeer = mapRowToBeer(results);
			allBeersByBreweryID.add(aBeer);
		}

		return allBeersByBreweryID;
	}

	@Override
	public void updateBeer(Beer aBeer) {
		String sqlUpdateBeer = "UPDATE beers SET name = ?, abv = ?, ibu = ?, info = ?, img_url = ?, brewery_id = ?, is_active = ?"
				+ "WHERE beer_id = ?";
		jdbcTemplate.update(sqlUpdateBeer, aBeer.getName(), aBeer.getAbv(), aBeer.getIbu(), aBeer.getInfo(), aBeer.getImgUrl(),
				aBeer.getBreweryId(), aBeer.isActive(), aBeer.getBeerId());
	}

	@Override
	public void deleteBeer(Long beerId) {
		String sqlDeleteABeer = "DELETE FROM beers WHERE beer_id = ?";
		jdbcTemplate.update(sqlDeleteABeer, beerId);
	}
	
	private Beer mapRowToBeer(SqlRowSet row) {
		Beer newBeer = new Beer();
		
		newBeer.setBeerId(row.getLong("beer_id"));
		newBeer.setName(row.getString("name").toUpperCase());
		newBeer.setAbv(row.getFloat("abv"));
		newBeer.setIbu(row.getInt("ibu"));
		newBeer.setType(row.getString("type"));
		newBeer.setInfo(row.getString("info"));
		newBeer.setImgUrl(row.getString("img_url"));
		newBeer.setActive(row.getBoolean("is_active"));
		newBeer.setBreweryId(row.getLong("brewery_id"));

		return newBeer;
	}
}
