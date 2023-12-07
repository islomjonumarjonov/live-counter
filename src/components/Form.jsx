import React, { useState } from "react";
import { useRef } from "react";
import Show from "./Show";
import { toast } from "react-toastify";

function Form() {
  const [state, setState] = useState(false);
  const [value, setValue] = useState({
    day: 24,
    month: "09",
    year: 1999,
  });
  const day = useRef();
  const month = useRef();
  const year = useRef();

  const tt = new Date();
  console.log("Now:", tt);

  const handleSubmit = (e) => {
    e.preventDefault();

    //time now
    const yearN = tt.getFullYear();
    const monthN = tt.getMonth();
    const dayN = tt.getDate();
    console.log(yearN, monthN, dayN);

    //born time
    const yearB = year.current.value;
    const monthB = month.current.value;
    const dayB = day.current.value;
    // console.log(dayB);

    //error checking
    if (yearB < yearN) {
      //True
      if (monthB <= 12) {
        //True
        if (
          (monthB < 8 && monthB % 2 > 0) ||
          8 - monthB == 0 ||
          10 - monthB == 0 ||
          12 - monthB == 0
        ) {
          //31
          if (dayB <= 31) {
            //True
            setState(true);
            setValue({
              year: yearB,
              month: monthB,
              day: dayB,
            });
          } else {
            //False
            toast.dark("Days in that month should be less than 31");
          }
        } else if (monthB == 2) {
          //28
          if (dayB < 28) {
            //True
            setState(true);
            setValue({
              year: yearB,
              month: monthB,
              day: dayB,
            });
          } else {
            //False
            toast.dark("Days in that month should be less than 28");
          }
        } else if (monthB <= 0) {
          //False
          toast.dark("Day amount isn't correct");
        } else {
          //30
          if (dayB < 30) {
            //True
            setState(true);
            setValue({
              year: yearB,
              month: monthB,
              day: dayB,
            });
          } else {
            //False
            toast.dark("Days in that month should be less than 30");
          }
        }
      } else {
        //False
        toast.dark("Day amount isn't correct");
        console.log("Day amount isn't correct");
      }
    } else {
      //False
      toast.dark("Day amount isn't correct");
      console.log("Day amount isn't correct");
    }

    //counting

    //check
    console.log(day.current.value, month.current.value, year.current.value);

    //cleaning
    day.current.value = "";
    month.current.value = "";
    year.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label>
          <p>Day</p>
          <input
            placeholder={value.day}
            className="input1"
            required
            ref={day}
            type="number"
          />
        </label>
        <label>
          <p>Month</p>
          <input
            placeholder={value.month}
            className="input2"
            required
            ref={month}
            type="number"
          />
        </label>
        <label>
          <p>Year</p>
          <input
            placeholder={value.year}
            className="input3"
            required
            ref={year}
            type="number"
          />
        </label>
        <div>
          <button>Click</button>
        </div>
      </form>
      <Show state={state} info={value} time={tt} />
    </>
  );
}

export default Form;
