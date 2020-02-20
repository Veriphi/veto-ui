import * as React from 'react';

const useHover = <T extends HTMLElement>(): [
  (node?: T | null) => void,
  boolean
] => {
  const [value, setValue] = React.useState(false);

  // Wrap in useCallback so we can use in dependencies below
  const handleMouseOver = React.useCallback(() => setValue(true), []);
  const handleMouseOut = React.useCallback(() => setValue(false), []);

  // Keep track of the last node passed to callbackRef
  // so we can remove its event listeners.
  const ref = React.useRef<T>();

  // Use a callback ref instead of useEffect so that event listeners
  // get changed in the case that the returned ref gets added to
  // a different element later. With useEffect, changes to ref.current
  // wouldn't cause a rerender and thus the effect would run again.
  const callbackRef = React.useCallback<(node?: null | T) => void>(
    node => {
      if (ref.current) {
        ref.current.removeEventListener('mouseover', handleMouseOver);
        ref.current.removeEventListener('mouseout', handleMouseOut);
      }

      ref.current = node || undefined;

      if (ref.current) {
        ref.current.addEventListener('mouseover', handleMouseOver);
        ref.current.addEventListener('mouseout', handleMouseOut);
      }
    },
    [handleMouseOver, handleMouseOut]
  );

  return [callbackRef, value];
};
export { useHover };
