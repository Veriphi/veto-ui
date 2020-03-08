import * as React from 'react';
import { FormField } from '.';
import { Select } from '../Select';
import { Input } from '../Input';
import { Modal } from '../Modal';
import { Box, Flex } from '../Core';
import { Text } from '../Text';

export default {
  title: 'Form Field',
};

export const formField = () => (
  <div>
    <Modal title="New Channel" isOpen={true} onClickCloseButton={() => {}}>
      <Box width="480px">
        <Box mb={4}>Provide the new channel information.</Box>
        <FormField label="Label">
          <Input placeholder="Channel label" />
        </FormField>
        <FormField label="Description">
          <Input placeholder="Channel description" />
        </FormField>
        <FormField
          label="Connection"
          tooltipContent="A connection is something"
        >
          <Input placeholder="Paste remove conection code..." />
        </FormField>
        <Flex alignItems="center">
          <FormField
            label="Funding"
            helperText="Max. available: 0.0000615 BTC"
            tooltipContent="This has something to do with funding"
            width="50%"
          >
            <Input placeholder="Funding" width="95%" />
          </FormField>
          <Text sx={{ color: 'grey' }}> = 0.025 BTC / ~$303.98 CAD</Text>
        </Flex>
        <Flex alignItems="center">
          <FormField
            label="Opening fees"
            tooltipContent="This has something to do with opening fees"
            width={1 / 3}
          >
            <Select>
              <option>Custom</option>
            </Select>
          </FormField>
        </Flex>
      </Box>
    </Modal>
  </div>
);
