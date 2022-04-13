import React from "react";
import { HomeNav } from "../components/Navigation";

function GradientTest() {
  const types = [
    "bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"
  ];

  return (
    <>
      <HomeNav />
      <div className="gradientTest">
        <h1>Gradient Test</h1>
        {types.map((type1) => (
          <div className="gradients">
            <h2>{type1}</h2>
            <div className={`gradientBox ${type1}`}>
              {types.map((type2) => (
                <div className={type2}>{`${type1} ${type2}`}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default GradientTest;
