import * as React from 'react';
import { Label } from '../Label';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { Box, Flex, BoxProps } from '../Core';

interface Props extends BoxProps {
  label: string;
  id?: string;
  name?: string;
  helperText?: string;
  tooltipContent?: React.ReactNode;
}
const FormField: React.FC<Props> = ({
  id,
  name,
  label,
  tooltipContent,
  helperText,
  children,
  ...restProps
}) => {
  let nextChildren = children;

  if (typeof children === 'function') {
    nextChildren = React.cloneElement(children as any, { id, name });
  }

  return (
    <Box mb={3} {...restProps}>
      <Flex alignItems="baseline">
        <Label sx={{ ml: 3, mb: 1 }}>{label}</Label>
        {helperText && (
          <Text sx={{ color: 'grey', fontSize: 'small' }}>
            &nbsp;{helperText}
          </Text>
        )}
        {tooltipContent && (
          <Tooltip content={tooltipContent} placement="top">
            <Text
              sx={{
                fontSize: '12px',
                color: 'grey',
                ml: 1,
                px: '2px',
                lineHeight: 1,
                border: '1px solid',
                borderColor: 'lightGrey',
                borderRadius: 'radius-1',
              }}
            >
              ?
            </Text>
          </Tooltip>
        )}
      </Flex>
      {nextChildren}
    </Box>
  );
};

export { FormField };
