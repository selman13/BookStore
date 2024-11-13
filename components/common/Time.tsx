"use client";
import React, { useEffect, useState } from 'react';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div suppressHydrationWarning>
            {currentTime.toLocaleTimeString("az-AZ", { timeZone: "Asia/Baku" })}
        </div>
    );
};

export default Time;
