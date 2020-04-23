import * as React from 'react';
import { Flex, BoxProps, Box } from '../../Core';
import { Text } from '../../Text';
import { Modal } from '../../Modal';

export default {
  title: 'patterns/Label Value',
};

interface Props extends BoxProps {
  label: string;
  value: string;
}
const LabelValue: React.FC<Props> = ({ label, value, ...restProps }) => (
  <Flex alignItems="center" {...restProps}>
    <Text
      width={3 / 12}
      sx={{
        color: 'primary',
        fontSize: 'small',
        textTransform: 'uppercase',
        fontWeight: '600',
      }}
    >
      {label}
    </Text>
    <Text>{value}</Text>
  </Flex>
);

export const labelValue = () => (
  <Box>
    <Modal
      title={<Text variant="heading1">Send BTC</Text>}
      isOpen={true}
      onClickCloseButton={() => {}}
    >
      <Box width="480px">
        <Text mb={4}>Review and confirm your transaction...</Text>

        <Box p={4}>
          <Box as="ul" sx={{ m: 0, p: 0, listStyle: 'none', li: { mb: '3' } }}>
            <li>
              <LabelValue label="From" value="Node Wallet #1" />
            </li>
            <li>
              <LabelValue
                label="To"
                value="bc12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX"
              />
            </li>
            <li>
              <LabelValue label="Label" value="To my 6.15 cold wallet" />
            </li>
            <li>
              <LabelValue
                label="Amount"
                value="0.27500000 BTC / ~$3,343.83 CAD"
              />
            </li>
            <li>
              <LabelValue
                label="Network Fees"
                value="0.00000564 BTC / ~$0.07 CAD"
              />
            </li>
          </Box>
        </Box>

        <Box p={4} bg="background.1">
          <LabelValue label="Total" value="0.27500564 BTC / ~$3,343.90 CAD" />
        </Box>
      </Box>
    </Modal>
  </Box>
);
