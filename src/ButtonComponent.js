import React from "react";

export default function ButtonComponent(props) {
  const handleHour = () => {
    props.hoursIncrement();
  };

  const handleMinute = () => {
    props.minutesIncrement();
  };

  const handleTime = () => {
    props.handleResetTime();
  };

  const resetTime = () => {
    props.resetTime();
  };

  return (
    <div>
      <button onClick={handleHour}>Hour + </button>
      <button onClick={handleMinute}>Minute +</button>
      <button onClick={handleTime}>Current Time</button>
      <button onClick={resetTime}>Reset</button>
    </div>
  );
}
