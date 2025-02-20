import React from 'react';
import { Trans } from '@lingui/macro';
import { Box } from '@material-ui/core';
import styled from 'styled-components';
import StateColor from '../../constants/StateColor';
import Amount, { AmountProps } from '../Amount';

const StyledWarning = styled(Box)`
  color: ${StateColor.WARNING};
`;

const StyledError = styled(Box)`
  color: ${StateColor.ERROR};
`;

type FeeProps = AmountProps;

export default function Fee(props: FeeProps) {
  return (
    <Amount {...props}>
      {({ value, toto }) => {
        const isHigh = toto >= 1000;
        const isLow = toto !== 0 && toto < 1;

        if (isHigh) {
          return (
            <StyledWarning>
              <Trans>Value seems high</Trans>
            </StyledWarning>
          );
        }

        if (isLow) {
          return (
            <StyledError>
              <Trans>Incorrect value</Trans>
            </StyledError>
          );
        }

        return null;
      }}
    </Amount>
  );
}

Fee.defaultProps = {
  label: <Trans>Fee</Trans>,
  name: 'fee',
};
