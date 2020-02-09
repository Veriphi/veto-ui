import * as React from 'react';
import { Box } from '../Core';
import { Input } from '../Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

interface Props {
  checked?: boolean;
}
const Switch: React.FC<Props> = ({ checked }) => (
  <Box
    as="label"
    __css={{
      position: 'relative',
      display: 'inline-block',
      cursor: 'pointer',
    }}
  >
    <Input
      type="checkbox"
      checked={checked}
      value={checked ? 1 : 0}
      __css={{
        opacity: 0,
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: 0,
        zIndex: 3,
        cursor: 'pointer',

        '&:checked + .veto-switch__wrapper': {
          background: '#F3F1F5',
          borderColor: '#E6E5E6',
          '.veto-switch__slider': {
            transform: 'translateX(16px)',
            background: '#2F77DC',
          },
        },
      }}
    />
    <Box
      as="span"
      className="veto-switch__wrapper"
      __css={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '36px',
        height: '18px',
        boxSizing: 'border-box',
        border: 'solid 1px #E7E6E7',
        borderRadius: '30px',
        background: '#F3F1F4',
        transitionProperty: 'background',
        transitionDuration: '300ms',
        transitionTimingFunction: 'cubic-bezier(0.68, 1.46, 0.1, 1.06)',
        svg: {},
      }}
    >
      <Box
        as="span"
        __css={{
          svg: {
            position: 'absolute',
            width: '10px',
            height: '10px',
            top: '4px',
            right: '4px',
          },
        }}
      >
        <FontAwesomeIcon icon={faTimes} color="#A5A2B1" />
      </Box>
      <Box
        as="span"
        __css={{
          svg: {
            position: 'absolute',
            width: '10px',
            height: '10px',
            top: '4px',
            left: '2px',
          },
        }}
      >
        <FontAwesomeIcon icon={faCheck} color="#5F5C69" />
      </Box>
      <Box
        as="span"
        className="veto-switch__slider"
        __css={{
          display: 'flex',
          justifyContent: 'center',
          alignSelf: 'center',
          position: 'absolute',
          top: '2px',
          width: '14px',
          height: '14px',
          margin: '0 2px',
          boxSizing: 'border-box',
          border: 'solid 1px #E6E5E6',
          borderRadius: '50%',
          background: '#A4A1B0',
          zIndex: 2,
          boxShadow: '',
          transitionProperty: 'translateX(0)',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.68, 1.46, 0.1, 1.06)',
        }}
      ></Box>
    </Box>
  </Box>
);

export { Switch };
