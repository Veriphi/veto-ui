import * as React from 'react';
import { Modal } from '.';
import { Box, Flex } from '../Core';
import { Button } from '../Button';
import { Text } from '../Text';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

export default {
  title: 'Modal',
};

export const modal = () => {
  // eslint-disable-next-line
  const [modalIsOpen, setIsOpen] = React.useState(true);

  return (
    <Box>
      <button onClick={() => setIsOpen(s => !s)}>open modal</button>
      <Modal
        title="Lightning Payment"
        isOpen={modalIsOpen}
        onClickCloseButton={() => setIsOpen(s => !s)}
      >
        <Text sx={{ fontWeight: 'bold', color: 'grey', mb: 4 }}>
          Review Payment
        </Text>
        <Box mx={2} width="500px" mb={2}>
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                To
              </Text>
            </Box>
            <Box>
              <Text>Bitcoun Outlet Store</Text>
            </Box>
          </Flex>
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Memo
              </Text>
            </Box>
            <Box>
              <Text>For order #16428</Text>
            </Box>
          </Flex>

          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Amount
              </Text>
            </Box>
            <Box>
              <Text>1000, sats</Text>
            </Box>
          </Flex>

          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Network fees
              </Text>
            </Box>
            <Box>
              <Text>~2 sats</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          px={2}
          py={2}
          width="500px"
          mb={4}
          sx={theme => ({ bg: theme.cards.inset.background })}
        >
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Total
              </Text>
            </Box>
            <Box>
              <Text sx={{ fontWeight: 'bold' }}>100, 002 sats</Text>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Button variant="outline" icon={faTimes}>
            Cancel
          </Button>
          <Button variant="primary" icon={faUpload}>
            Send Payment
          </Button>
        </Flex>
      </Modal>
    </Box>
  );
};

export const modalAside = () => {
  // eslint-disable-next-line
  const [modalIsOpen, setIsOpen] = React.useState(true);

  return (
    <Box>
      <button onClick={() => setIsOpen(s => !s)}>open modal</button>
      <Modal
        aside
        title="Lightning Payment"
        isOpen={modalIsOpen}
        onClickCloseButton={() => setIsOpen(s => !s)}
      >
        <Text sx={{ fontWeight: 'bold', color: 'grey', mb: 4 }}>
          Review Payment
        </Text>
        <Box mx={2} width="500px" mb={2}>
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                To
              </Text>
            </Box>
            <Box>
              <Text>Bitcoun Outlet Store</Text>
            </Box>
          </Flex>
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Memo
              </Text>
            </Box>
            <Box>
              <Text>For order #16428</Text>
            </Box>
          </Flex>

          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Amount
              </Text>
            </Box>
            <Box>
              <Text>1000, sats</Text>
            </Box>
          </Flex>

          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Network fees
              </Text>
            </Box>
            <Box>
              <Text>~2 sats</Text>
            </Box>
          </Flex>
        </Box>

        <Box
          px={2}
          py={2}
          width="500px"
          mb={4}
          sx={theme => ({ bg: theme.cards.inset.background })}
        >
          <Flex mb={2}>
            <Box width={1 / 2}>
              <Text
                sx={{
                  color: 'secondary',
                  textTransform: 'uppercase',
                  fontSize: 'small',
                  fontWeight: 'bold',
                }}
              >
                Total
              </Text>
            </Box>
            <Box>
              <Text sx={{ fontWeight: 'bold' }}>100, 002 sats</Text>
            </Box>
          </Flex>
        </Box>
        <Flex justifyContent="space-between">
          <Button variant="outline" icon={faTimes}>
            Cancel
          </Button>
          <Button variant="primary" icon={faUpload}>
            Send Payment
          </Button>
        </Flex>
      </Modal>
    </Box>
  );
};
