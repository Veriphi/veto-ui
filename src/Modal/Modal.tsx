import * as React from 'react';
import ReactModal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { Button } from '../Button';
import { Box } from '../Core';
import { Text } from '../Text';

interface Props {
  title?: string;
  isOpen: boolean;
  onClickCloseButton: () => void;
}
const Modal: React.FC<Props> = ({
  isOpen,
  title,
  children,
  onClickCloseButton,
}) => {
  return (
    <ReactModal isOpen={isOpen} className="VetoModal" ariaHideApp={false}>
      <Button
        onClick={onClickCloseButton}
        __css={theme => ({
          position: 'absolute',
          right: theme.space[5],
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
          <Text variant="heading1" sx={{ mb: 4 }}>
            {title}
          </Text>
        )}
        {children}
      </Box>
    </ReactModal>
  );
};

export { Modal };
