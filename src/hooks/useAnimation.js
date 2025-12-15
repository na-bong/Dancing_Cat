import { useState, useCallback } from 'react';

const useAnimation = (initialState = false) => {
  const [isPlaying, setIsPlaying] = useState(initialState);
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const start = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  const changeSpeed = useCallback((newSpeed) => {
    setSpeed(newSpeed);
  }, []);

  return {
    isPlaying,
    speed,
    toggle,
    start,
    stop,
    changeSpeed
  };
};

export default useAnimation;
