import { useEffect, useCallback, useState } from 'react';

let hidden: string;
let visibilityChange: string;

const getVisibility = () => {
  if (typeof document === 'undefined') {
    return false;
  }

  if (typeof document.hidden !== 'undefined') {
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
    // @ts-ignore
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
    // @ts-ignore
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }
  // @ts-ignore
  return !document[hidden];
};

const useTabVisibility = () => {
  const [visible, setVisible] = useState(getVisibility());
  const handleVisibility = useCallback(() => setVisible(getVisibility()), [setVisible]);

  useEffect(() => {
    window?.document.addEventListener(visibilityChange, handleVisibility, false);

    return () => window?.document.removeEventListener(visibilityChange, handleVisibility);
  }, [handleVisibility]);

  return { visible };
};

export default useTabVisibility;
