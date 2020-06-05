import * as React from 'react';
import { FormField } from '.';
import { Select } from '../Select';
import { Input, InputWithAddon } from '../Input';
import { Modal } from '../Modal';
import { Box, Flex } from '../Core';
import { Text } from '../Text';
import { Switch } from '../Switch';

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

        <Flex alignItems="center" mb={3}>
          <Input placeholder="IP address..." mr={3} />
          <Input placeholder="Port..." ml={2} />
        </Flex>

        <Flex alignItems="center">
          <FormField
            label="Funding"
            helperText="Max. available: 0.0000615 BTC"
            tooltipContent="This has something to do with funding"
            sx={{ width: '50%' }}
          >
            <Input placeholder="Funding" width="95%" />
          </FormField>
          <Text sx={{ color: 'grey' }}> = 0.025 BTC / ~$303.98 CAD</Text>
        </Flex>

        <Flex alignItems="center">
          <FormField
            label="Opening fees"
            tooltipContent="This has something to do with opening fees"
            sx={{ width: '33.3333%' }}
          >
            <Select>
              <option>Custom</option>
            </Select>
          </FormField>
          <FormField sx={{ width: '33.3333%' }}>
            <InputWithAddon
              defaultValue="1"
              addonRight="sats per byte"
              ml={2}
              width="35%"
              addonSxRight={{ width: '65%' }}
            />
          </FormField>
          <Flex width={1 / 3} justifyContent="space-around">
            <Text sx={{ fontSize: 'small', color: 'grey' }}>~0.02 CAD</Text>
            <Text sx={{ fontSize: 'small', color: 'grey' }}>RBF?</Text>
            <Switch />
          </Flex>
        </Flex>
      </Box>
    </Modal>
  </div>
);

formField.story = {
  docs: {
    hidden: true,
  },
};
