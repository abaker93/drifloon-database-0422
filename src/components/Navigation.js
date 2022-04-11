import React from "react";
import { Link } from "react-router-dom";
import AppsRounded from "@mui/icons-material/AppsRounded";
import FilterListRounded from "@mui/icons-material/FilterListRounded";
import SortRounded from "@mui/icons-material/SortRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

export const HomeNav = () => {
  return (
    <nav className="homeNav">
      <div className="navRight">
        <Link to="/">
          <AppsRounded className="navIcon" />
        </Link>
      </div>
    </nav>
  );
};

export const PokemonListNav = () => {
  return (
    <nav className="pokemonListNav">
      <div className="navRight">
        <Link to="/pokemon">
          <FilterListRounded className="navIcon" />
        </Link>
        <Link to="/pokemon">
          <SortRounded className="navIcon" />
        </Link>
        <Link to="/">
          <AppsRounded className="navIcon" />
        </Link>
      </div>
    </nav>
  );
};

export const PokemonNav = () => {
  return (
    <nav className="pokemonNav">
      <div className="navLeft">
        <Link to="/pokemon">
          <ArrowBackIosNewRoundedIcon className="navIcon" />
        </Link>
      </div>
      <div className="navRight">
        <Link to="/">
          <AppsRounded className="navIcon" />
        </Link>
      </div>
    </nav>
  );
};
