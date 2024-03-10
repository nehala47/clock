import React from "react";

export default function ButtonComponent(props) {

  const {hoursIncrement:handleHour, minutesIncrement:handleMinute, handleResetTime: handleTime, resetTime } = props;

  return (
    <div>
      <button onClick={handleHour}>Hour + </button>
      <button onClick={handleMinute}>Minute +</button>
      <button onClick={handleTime}>Current Time</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}