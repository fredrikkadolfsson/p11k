import React from 'react';
import { default as MuiPopover, PopoverProps } from '@material-ui/core/Popover';

const Popover = ({ children, ...restProps }: PopoverProps): JSX.Element => (
  <MuiPopover {...restProps}>{children}</MuiPopover>
);

export default Popover;
