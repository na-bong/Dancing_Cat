import { useState, useCallback } from 'react';

const useAnimation = (initialState = false) => {
  const [isPlaying, setIsPlaying] = useState(initialState);

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const start = useCallback(() => {
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    setIsPlaying(false);
  }, []);

  return {
    isPlaying,
    toggle,
    start,
    stop
  };
};

export default useAnimation;
