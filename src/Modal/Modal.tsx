import * as React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Button } from '../Button';
import { Box } from '../Core';
import { Text } from '../Text';

interface Props {
  title?: string;
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
      <Button
        onClick={onClickCloseButton}
        __css={theme => ({
          position: 'absolute',
          ...(aside
            ? {
                left: theme.space[2],
              }
            : {
                right: theme.space[5],
              }),
          top: theme.space[6],
        })}
        sx={{
          border: 'none',
          appearance: 'none',
          cursor: 'pointer',
        }}
      >
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </Button>
      <Box m={5} minWidth="300px">
        {title && (
          <Text
            variant="heading2"
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
            {title}
          </Text>
        )}
        {children}
      </Box>
    </ReactModal>
  );
};

export { Modal };
