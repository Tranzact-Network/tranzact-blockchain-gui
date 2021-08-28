import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Tranzact } from '@tranzact/icons';

const StyledTranzact = styled(Tranzact)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledTranzact />
    </Box>
  );
}
