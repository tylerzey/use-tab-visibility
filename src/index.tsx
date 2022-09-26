import { useEffect, useCallback, useState, useMemo } from 'react';

const getEventListenerName = (): string => {
  // @ts-ignore
  if (typeof document.msHidden !== 'undefined') {
    return 'msvisibilitychange';
    // @ts-ignore
  } else if (typeof document.webkitHidden !== 'undefined') {
    return 'webkitvisibilitychange';
  }

  return 'visibilitychange';
};

const getIsVisible = (): boolean => {
  // SSR
  if (typeof document === 'undefined') {
    return true;
  }

  // @ts-ignore
  return !(document.hidden ?? document.msHidden ?? document.webkitHidden);
};

const useTabVisibility = () => {
  const [visible, setVisible] = useState(getIsVisible());
  const handleVisibility = useCallback(() => setVisible(getIsVisible()), [setVisible]);

  useEffect(() => {
    const evListenerName = getEventListenerName();
    window?.document.addEventListener(evListenerName, handleVisibility, false);

    return () => window?.document.removeEventListener(evListenerName, handleVisibility);
  }, [handleVisibility]);

  return useMemo(() => ({ visible }), [visible]);
};

export default useTabVisibility;
