import React from "react";

export const Statbar = (stats) => {
  const max = {
    hp: 750,
    att: 550,
    def: 675,
    spAtt: 550,
    spDef: 675,
    spd: 550
  };

  if (stats.num) {
    return (
      <>
        <div className={`stat ${stats.stat}`}>
          <div className="statLabel">{stats.label}</div>
          <div className="statNum">{stats.num}</div>
          <div className="statBar">
            <div
              className="statBarFill"
              style={{ width: `calc((${stats.num} / 252) * 100%)` }}
            />
          </div>
        </div>
      </>
    );
  } else if (stats.min && stats.max) {
    return (
      <>
        <div className={`stat minmax ${stats.stat}`}>
          <div className="statLabel">{stats.label}</div>
          <div className="statNum">
            {stats.min}-{stats.max}
          </div>
          <div className="statBar">
            {stats.label === "HP" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.hp} * 100%)`,
                  width: `calc(${
                    stats.max / max.hp - stats.min / max.hp
                  } * 100%)`
                }}
              />
            ) : stats.label === "Attack" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.att} * 100%)`,
                  width: `calc(${
                    stats.max / max.att - stats.min / max.att
                  } * 100%)`
                }}
              />
            ) : stats.label === "Defense" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.def} * 100%)`,
                  width: `calc(${
                    stats.max / max.def - stats.min / max.def
                  } * 100%)`
                }}
              />
            ) : stats.label === "Sp.Att" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.spAtt} * 100%)`,
                  width: `calc(${
                    stats.max / max.spAtt - stats.min / max.spAtt
                  } * 100%)`
                }}
              />
            ) : stats.label === "Sp.Def" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.spDef} * 100%)`,
                  width: `calc(${
                    stats.max / max.spDef - stats.min / max.spDef
                  } * 100%)`
                }}
              />
            ) : stats.label === "Speed" ? (
              <div
                className="statBarFill"
                style={{
                  left: `calc(${stats.min / max.spd} * 100%)`,
                  width: `calc(${
                    stats.max / max.spd - stats.min / max.spd
                  } * 100%)`
                }}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </>
    );
  }
};
