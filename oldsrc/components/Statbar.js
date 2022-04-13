import React from "react";

export const Statbar = (stats) => {
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
};
