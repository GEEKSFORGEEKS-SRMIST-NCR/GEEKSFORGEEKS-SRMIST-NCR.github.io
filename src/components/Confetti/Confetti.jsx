import React, { useEffect, useState } from "react";
import ReactConfetti from "react-confetti";

const Confetti = () => {
  const size = useWindowSize();

  return (
    <>
      <ReactConfetti
        width={size.width}
        height={size.height}
        tweenDuration={5}
      />
    </>
  );
};

// Hook
function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? undefined : window.innerWidth,
    height: isSSR ? undefined : window.innerHeight,
  });

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);

    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, []);

  return windowSize;
}

export default Confetti;
