import React, { useEffect, useState } from 'react';
import ReactConfetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'

const Confetti = () => {
  const { width, height } = useWindowSize()
  return (
    <ReactConfetti
      width={width}
      height={height}
      tweenDuration={5}
    />
  )
}
export default Confetti;
