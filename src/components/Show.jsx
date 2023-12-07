import React, { useState } from "react";

function Show({ state, info }) {
  //   const [rerender, setRerender] = useState(null);
  //   const { day, month, year } = info;

  //time
  const tt = new Date();
  const time = {
    year: tt.getFullYear(),
    month: tt.getMonth(),
    day: tt.getDay(),
  };
  const { day, month, year } = time;
  if (state) {
    console.log(state, info);
    // setRerender(true);
  }
  return (
    <div className="show">
      <p>
        <span>
          {state
            ? info.month > month
              ? year - info.year - 1
              : year - info.year
            : "~~"}
        </span>{" "}
        years
      </p>
      <p>
        <span>
          {state
            ? info.month > month
              ? month + (12 - info.month)
              : Math.abs(month - info.month)
            : "~~ "}
        </span>
        months
      </p>
      <p>
        <span>{state ? Math.abs(day - info.day + 3) : "~~"}</span> days
      </p>
    </div>
  );
}

export default Show;
