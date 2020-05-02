import * as React from 'react';
import { Modal } from '.';
import { Box, Flex } from '../Core';
import { Card } from '../Card';
import { Button } from '../Button';
import { Text, TextLink } from '../Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons/faUpload';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { faCube } from '@fortawesome/free-solid-svg-icons/faCube';

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
        title={<Text variant="heading1">Lightning Payment</Text>}
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
                  color: 'primary',
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
                  color: 'primary',
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
                  color: 'primary',
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
                  color: 'primary',
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
                  color: 'primary',
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
        title={
          <Text variant="heading2" sx={{ textTransform: 'uppercase' }}>
            Notifications
          </Text>
        }
        isOpen={modalIsOpen}
        onClickCloseButton={() => setIsOpen(s => !s)}
      >
        <Card variant="inset" sx={{ width: '400px', p: 3 }}>
          <Flex justifyContent="space-between" mb={3}>
            <Flex justifyContent="flex-end" alignItems="center">
              <FontAwesomeIcon icon={faTimes} size="sm" color="#C0BDC8" />
              <TextLink
                href="#"
                sx={{ fontSize: 'small', color: '#C0BDC8', ml: 1 }}
              >
                Dismiss
              </TextLink>
            </Flex>
            <Text sx={{ fontSize: 'small', color: '#C0BDC8' }}>
              03/06/2020 14:17 UTC
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
            <div>
              <Text sx={{ fontWeight: 'bold' }}>Incoming transaction</Text>
              <Text>1.25 BTC - Cold Card #2</Text>
              <Flex justifyContent="flex-end" alignItems="center">
                <TextLink
                  href="#"
                  sx={{ fontSize: 'small', color: 'black', mr: 1 }}
                >
                  View transaction
                </TextLink>
                <FontAwesomeIcon icon={faCube} size="sm" />
              </Flex>
            </div>
          </Flex>
        </Card>
      </Modal>
    </Box>
  );
};
