import * as React from 'react';
import { createPopper, Options, Instance } from '@popperjs/core';

export function usePopper(
  targetRef: React.RefObject<any>,
  popperRef: React.RefObject<any>,
  options?: Options
) {
  const extendedOptions: Options = {
    placement: 'right',
    modifiers: [],
    strategy: 'absolute',
    ...options,
  };

  const [placement, setPlacement] = React.useState(extendedOptions.placement);

  React.useLayoutEffect(() => {
    let popperInstance: Instance | null = null;
    if (!!targetRef.current && !!popperRef.current && !popperInstance) {
      popperInstance = createPopper(targetRef.current, popperRef.current, {
        ...extendedOptions,
        modifiers: [
          ...extendedOptions.modifiers,
          {
            name: 'stateTracker',
            enabled: true,
            phase: 'main',
            fn({ state }) {
              setPlacement(state.placement);
            },
          },
        ],
      });
    }
    return () => {
      popperInstance && popperInstance.destroy();
      popperInstance = null;
    };
  }, [placement, targetRef, popperRef, extendedOptions]);

  return {
    placement,
  };
}
