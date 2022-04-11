import React from "react";

// const calcWeakness = (attType, type1, type2) {

// }

export const Weakness = (types) => {
  return (
    <>
      <div>{types.attType}</div>
      <div>{types.type1}</div>
      <div>{types.type2}</div>
    </>
  );
};
