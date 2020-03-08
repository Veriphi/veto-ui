import * as React from 'react';
import { SystemStyleObject } from '@styled-system/css';
import { Label } from '../Label';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { Box, Flex } from '../Core';

interface Props {
  label?: string;
  id?: string;
  helperText?: string;
  tooltipContent?: React.ReactNode;
  sx?: SystemStyleObject;
}
const FormField: React.FC<Props> = ({
  id,
  label,
  tooltipContent,
  helperText,
  sx,
  children,
  ...restProps
}) => {
  let nextChildren = children;

  if (typeof children === 'function') {
    nextChildren = React.cloneElement(children as any, {
      id,
      ...restProps,
    });
  }

  return (
    <Box mb={3} sx={sx}>
      <Flex alignItems="baseline">
        {label ? (
          <Label sx={{ ml: 3, mb: 1 }} htmlFor={id}>
            {label}
          </Label>
        ) : (
          <Label sx={{ mb: 1 }}>&nbsp;</Label>
        )}

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
