import React from "react";

import { GetAltForms } from "../utilities";

export const AltFormNav = (poke) => {
  // console.log(poke.national);
  const altForms = GetAltForms(poke.national);
  console.log(altForms);
  return "hi";
};
