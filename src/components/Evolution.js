import React from "react";

import { GetEvolutions } from "../utilities";
import { EvoPhoto } from "./EvoPhoto";

export const Evolution = (poke) => {
  const evolutions = GetEvolutions(poke.pokemon.fields.evolution);

  const evoConditions = (lvl, cond) => {
    let evoCond = [];

    if (lvl) {
      if (cond) {
        for (let i = 0; i < lvl.length; i++) {
          if (lvl[i] === "_") {
            if (cond[i] === "_") {
              evoCond.push("");
            } else {
              evoCond.push(cond[i]);
            }
          } else {
            if (cond[i] === "_") {
              evoCond.push("lvl " + lvl[i]);
            } else {
              evoCond.push("lvl " + lvl[i] + ", " + cond[i]);
            }
          }
        }
      } else {
        for (let i = 0; i < lvl.length; i++) {
          if (lvl[i] === "_") {
          } else {
            evoCond.push("lvl " + lvl[i]);
          }
        }
      }
    } else {
      if (cond) {
        for (let i = 0; i < cond.length; i++) {
          if (cond[i] === "_") {
            evoCond.push("");
          } else {
            evoCond.push(cond[i]);
          }
        }
      }
    }

    return evoCond;
  };

  return (
    <>
      {evolutions.map((evo) => (
        <div key={evo.id}>
          {evo.fields.evo1 ? (
            <div>
              {evo.fields.evo1.map((value, index) =>
                value !== "recCUXMOJy5H3QaO9" ? (
                  <EvoPhoto key={index} pokemon={value} />
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.lvl1 || evo.fields.cond1 ? (
            <div>
              {evoConditions(evo.fields.lvl1, evo.fields.cond1).map(
                (cond, index) =>
                  cond !== "" ? (
                    <div key={index} className="evoBlock evoCond">
                      <div>
                        <div>{cond}</div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="evoBlock evoCond"></div>
                  )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.evo2 ? (
            <div>
              {evo.fields.evo2.map((value, index) =>
                value !== "recCUXMOJy5H3QaO9" ? (
                  <EvoPhoto key={index} pokemon={value} />
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.lvl2 || evo.fields.cond2 ? (
            <div>
              {evoConditions(evo.fields.lvl2, evo.fields.cond2).map(
                (cond, index) =>
                  cond !== "" ? (
                    <div key={index} className="evoBlock evoCond">
                      <div>
                        <div>{cond}</div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="evoBlock evoCond"></div>
                  )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.evo3 ? (
            <div>
              {evo.fields.evo3.map((value, index) =>
                value !== "recCUXMOJy5H3QaO9" ? (
                  <EvoPhoto key={index} pokemon={value} />
                ) : (
                  ""
                )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.lvl3 || evo.fields.cond3 ? (
            <div>
              {evoConditions(evo.fields.lvl3, evo.fields.cond3).map(
                (cond, index) =>
                  cond !== "" ? (
                    <div key={index} className="evoBlock evoCond">
                      <div>
                        <div>{cond}</div>
                      </div>
                    </div>
                  ) : (
                    <div key={index} className="evoBlock evoCond"></div>
                  )
              )}
            </div>
          ) : (
            ""
          )}
          {evo.fields.evo4 ? (
            <div>
              {evo.fields.evo4.map((value, index) =>
                value !== "recCUXMOJy5H3QaO9" ? (
                  <EvoPhoto key={index} pokemon={value} />
                ) : (
                  <div key={index} className="evoBlock evoPhoto"></div>
                )
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </>
  );
};
