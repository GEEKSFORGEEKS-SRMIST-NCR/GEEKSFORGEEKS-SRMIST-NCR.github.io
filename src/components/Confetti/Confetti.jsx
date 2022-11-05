import React, { useEffect, useState } from 'react';
import { window } from "browser-monads";
import ReactConfetti from 'react-confetti';

const Confetti = () => {
    const [windowSize, setWindowSize] = useState({

    width: undefined,

    height: undefined,

  });

  useEffect(() => {

    function handleResize() {

      setWindowSize({

        width: window.innerWidth,

        height: window.innerHeight,

      });

    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);

  }, []);
    return (
        <>
            <ReactConfetti
                width={windowSize.width}
                height={windowSize.height}
                tweenDuration={1000}
            />    
        </>
    );
};

export default Confetti;
