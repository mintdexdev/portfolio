import React, { useEffect, useState } from 'react';

function Time() {
  const [currentTime, setCurrentTime] = useState("");
  useEffect(() => {
    // function to format time as HH:mm:ss in IST
    const getTimeIST = () => {
      return new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    };

    setCurrentTime(getTimeIST());


    const timer = setInterval(() => {
      setCurrentTime(getTimeIST());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='text-center font-mono py-10'>
      <p>[ {currentTime} ] </p>
      <p>IST / +5:30 UTC</p>
    </div>
  )
}

export default Time