import { useContext, useRef, useEffect } from 'react';
import { Context } from './index';
export default function usePollingRequest(run: () => void) {
  const timer = useRef(-1);
  const { selected } = useContext(Context);
  useEffect(() => {
    switch (selected) {
      case '0':
        clearInterval(timer.current);
        break;
      default:
        timer.current = window.setInterval(() => {
          run();
        }, Number(selected) * 1000);
    }
    return () => {
      clearInterval(timer.current);
    };
  }, [selected]);
  return {
    selected,
  };
}
