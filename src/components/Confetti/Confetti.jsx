import React from 'react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

const Confetti = () => {
  const { width, height } = useWindowSize()
  return (
    <ReactConfetti
      width={1200}
      height={1200}
      tweenDuration={5}
    />
  )
}

export default Confetti;
