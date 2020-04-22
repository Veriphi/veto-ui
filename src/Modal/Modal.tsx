import * as React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Button } from '../Button';
import { Text } from '../Text';
import { Box } from '../Core';

interface Props {
  title?: React.ReactNode;
  aside?: boolean;
  isOpen: boolean;
  onClickCloseButton: () => void;
}
const Modal: React.FC<Props> = ({
  aside = false,
  isOpen,
  title,
  children,
  onClickCloseButton,
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      portalClassName={aside ? 'VetoModalPortalAside' : 'VetoModalPortal'}
      className={aside ? 'VetoModalAside' : 'VetoModal'}
      ariaHideApp={false}
    >
      <Box
        m={aside ? 7 : 5}
        minWidth="300px"
        sx={{
          position: 'relative',
          willChange: 'auto',
        }}
      >
        <Button
          onClick={onClickCloseButton}
          __css={theme => ({
            position: 'absolute',
            ...(aside
              ? {
                  left: '-25px',
                }
              : {
                  right: theme.space[2],
                  top: '12px',
                }),
          })}
          sx={{
            border: 'none',
            appearance: 'none',
            cursor: 'pointer',
            background: 'transparent',
          }}
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </Button>
        {title && (
          <Box
            sx={{
              mb: 4,
              ...(aside
                ? {
                    textAlign: 'right',
                  }
                : {
                    textAlign: 'left',
                  }),
            }}
          >
            {typeof title === 'string' ? (
              <Text variant="heading1">{title}</Text>
            ) : (
              title
            )}
          </Box>
        )}
        {children}
      </Box>
    </ReactModal>
  );
};

export { Modal };
