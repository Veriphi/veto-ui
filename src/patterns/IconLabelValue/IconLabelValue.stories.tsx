import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons/faTag';
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons/faCodeBranch';
import { faCoins } from '@fortawesome/free-solid-svg-icons/faCoins';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons/faExchangeAlt';

import { Flex, BoxProps, Box } from '../../Core';
import { Text } from '../../Text';
import { Modal } from '../../Modal';

export default {
  title: 'patterns/Icon Label Value',
};

interface Props extends BoxProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}
const IconLabelValue: React.FC<Props> = ({
  label,
  value,
  icon,
  ...restProps
}) => (
  <Flex alignItems="center" {...restProps}>
    <Box width={1 / 12} sx={{ color: 'primary' }}>
      {icon}
    </Box>
    <Text width={3 / 12}>{label}</Text>
    <Text sx={{ fontWeight: 'bold' }}>{value}</Text>
  </Flex>
);

export const iconLabelValue = () => (
  <Box>
    <Modal
      title={<Text variant="heading1">Wallet Details</Text>}
      isOpen={true}
      onClickCloseButton={() => {}}
    >
      <Box width="480px">
        <Text mb={4}>View and/or edit your wallet details</Text>
        <Box p={4}>
          <Box as="ul" sx={{ m: 0, p: 0, listStyle: 'none', li: { mb: '3' } }}>
            <li>
              <IconLabelValue
                label="Label"
                value="My Lightning Wallet"
                icon={<FontAwesomeIcon icon={faTag} />}
              />
            </li>
            <li>
              <IconLabelValue
                label="Format"
                value="HD Segwit (P2WPKH, Bech32)"
                icon={<FontAwesomeIcon icon={faCode} />}
              />
            </li>
            <li>
              <IconLabelValue
                label="Derivation"
                value="m/84'/0'/0'/0"
                icon={<FontAwesomeIcon icon={faCodeBranch} />}
              />
            </li>
            <li>
              <IconLabelValue
                label="Unit"
                value="BTC"
                icon={<FontAwesomeIcon icon={faCoins} />}
              />
            </li>
            <li>
              <IconLabelValue
                label="xPub"
                value="*********"
                icon={<FontAwesomeIcon icon={faExchangeAlt} />}
              />
            </li>
          </Box>
        </Box>
      </Box>
    </Modal>
  </Box>
);
