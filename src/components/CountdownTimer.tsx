import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialMinutes?: number;
  initialSeconds?: number;
}

const CountdownTimer = ({ initialMinutes = 59, initialSeconds = 59 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime.minutes === 0 && prevTime.seconds === 0) {
          // Reset timer when it reaches 0
          return { minutes: initialMinutes, seconds: initialSeconds };
        }
        
        if (prevTime.seconds === 0) {
          return {
            minutes: prevTime.minutes - 1,
            seconds: 59
          };
        }
        
        return {
          ...prevTime,
          seconds: prevTime.seconds - 1
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [initialMinutes, initialSeconds]);

  return (
    <div className="flex items-center justify-center space-x-2 bg-organic-warning text-white px-4 py-2 rounded-lg font-bold">
      <span className="text-sm">OFFER ENDS IN:</span>
      <div className="flex items-center space-x-1 text-lg">
        <span className="bg-white/20 px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span>:</span>
        <span className="bg-white/20 px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

export default CountdownTimer;