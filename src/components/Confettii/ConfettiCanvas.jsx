import React, { useEffect, useState } from 'react';
import { window } from "browser-monads";
import Confetti from 'react-confetti';

const ConfettiCanvas = () => {
    const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize]);

    return (
        <>
            <Confetti
                width={100}
                height={100}
                tweenDuration={1000}
            />    
        </>
    );
};

export default ConfettiCanvas;
