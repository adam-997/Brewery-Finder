import React from "react";
import { Link } from "react-router-dom";
import BreweryCard from "../Breweries/Breweries";
import PostBreweries from "../PostForms/PostBreweries";

const Home = (props) => {
  return (
    <div>
      <BreweryCard />
      <PostBreweries />
    </div>
  );
};

export default Home;
