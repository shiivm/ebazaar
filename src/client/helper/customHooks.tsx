import  { useEffect, useRef } from "react";

export const useInterval = (callback: () => void, delay: number):void => {
  const initialValue = () => {};
  const savedCallback = useRef<() => void>(initialValue);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const interVal = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(interVal);
  }, [delay]);
};
