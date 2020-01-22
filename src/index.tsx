import * as React from 'react';

const useTabVisibility = () => {
  let hidden: string;
  let visibilityChange: string;

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
  const [visible, setVisible] = React.useState(!!document[hidden]);

  // @ts-ignore
  const handleVisibility = React.useCallback(() => setVisible(!document[hidden]), [setVisible]);

  React.useEffect(() => {
    document.addEventListener(visibilityChange, handleVisibility, false);

    return () => document.removeEventListener(visibilityChange, handleVisibility);
  }, []);

  return { visible };
};

export default useTabVisibility;
