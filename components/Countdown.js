import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countdown = () => {
  const [expiryTime, setExpiryTime] = useState("5 sep 2022 23:59:59");
  const [countdownTime, setCountdownTime] = useState({
    countdownDays: "",
    countdownHours: "",
    countdownMinutes: "",
    countdownSeconds: "",
  });

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const countdownDateTime = new Date(expiryTime).getTime();
      const currentTime = new Date().getTime();
      const remainingDayTime = countdownDateTime - currentTime;
      const totalDays = Math.floor(remainingDayTime / (1000 * 60 * 60 * 24));
      const totalHours = Math.floor(
        (remainingDayTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const totalMinutes = Math.floor(
        (remainingDayTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const totalSeconds = Math.floor((remainingDayTime % (1000 * 60)) / 1000);

      const runningCountdownTime = {
        countdownDays: totalDays,
        countdownHours: totalHours,
        countdownMinutes: totalMinutes,
        countdownSeconds: totalSeconds,
      };

      setCountdownTime(runningCountdownTime);

      if (remainingDayTime < 0) {
        clearInterval(timeInterval);
        setExpiryTime(false);
      }
    }, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  });
  return (
    <div>
      <Card
        Content={
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-Willywonka md:text-3xl lg:text-4xl">
              Registration{"\u00a0\u00a0"}is{"\u00a0\u00a0"}Closed
            </h1>
              {/* <h2 className="text-base md:text-xl lg:text-2xl">
              {countdownTime.countdownDays} days {countdownTime.countdownHours}{" "}
              hours {countdownTime.countdownMinutes} minutes{" "}
              {countdownTime.countdownSeconds} seconds{" "}
            </h2> */}
          </div>
        }
      />
    </div>
  );
};

export default Countdown;
