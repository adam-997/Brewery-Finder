#!/bin/bash
BASEDIR=$(dirname $0)
DATABASE=final_capstone
psql -U postgres -f "$BASEDIR/dropdb.sql" &&
createdb -U postgres $DATABASE &&
psql -U postgres -d $DATABASE -f "$BASEDIR/schema.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/user.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/table_init.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/breweries.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/beers.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/reviews.sql" &&
psql -U postgres -d $DATABASE -f "$BASEDIR/brewery_beer.sql"

#! psql -U postgres -d $DATABASE -f "$BASEDIR/data.sql"
#! data.sql is a backup file for all the table data.
