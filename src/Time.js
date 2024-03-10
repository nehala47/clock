import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import "./Time.css";

function Time() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const incrementHour = () => {
    if (hours === 23) {
      setHours(0);
    } else {
      setHours(hours + 1);
    }
  };

  const incrementMinute = () => {
    if (minutes === 59) {
      incrementHour();
      setMinutes(0);
    } else {
      setMinutes(minutes + 1);
    }
  };

  const displayHour = function () {
    return hours < 10 ? "0" + hours : hours;
  };

  const displayMinute = function () {
    return minutes < 10 ? "0" + minutes : minutes;
  };

  const handleResetTime = function () {
    const now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
  };
  
  const resetTime = function () {
    setHours(0);
    setMinutes(0);
  };

  return (
    <div>
      <h1>
        {displayHour()} : {displayMinute()}
      </h1>
      <ButtonComponent
        hoursIncrement={incrementHour}
        minutesIncrement={incrementMinute}
        handleResetTime={handleResetTime}
        resetTime={resetTime}
      />
    </div>
  );
}

export default Time;
