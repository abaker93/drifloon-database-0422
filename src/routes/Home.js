import React from "react";
import { HomeNav } from "../components/Navigation";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <HomeNav />
      <Link to="/">Home</Link>
      <Link to="/pokemon">National Pokedex</Link>
      <Link to="/gradients">Gradients</Link>
    </>
  );
}

export default Home;
