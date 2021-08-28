import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as TranzactIcon } from './images/tranzact.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={TranzactIcon} viewBox="0 0 150 58" {...props} />;
}
