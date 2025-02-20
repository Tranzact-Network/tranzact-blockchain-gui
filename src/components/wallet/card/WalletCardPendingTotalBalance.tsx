import React from 'react';
import { Trans } from '@lingui/macro';
import FarmCard from '../../farm/card/FarmCard';
import useWallet from '../../../hooks/useWallet';
import useCurrencyCode from '../../../hooks/useCurrencyCode';
import { toto_to_tranzact_string } from '../../../util/tranzact';

type Props = {
  wallet_id: number;
};

export default function WalletCardPendingTotalBalance(props: Props) {
  const { wallet_id } = props;

  const { wallet, loading } = useWallet(wallet_id);
  const currencyCode = useCurrencyCode();

  const balance = wallet?.wallet_balance?.confirmed_wallet_balance;
  const balance_pending = wallet?.wallet_balance?.balance_pending;

  const value = balance + balance_pending;

  return (
    <FarmCard
      loading={loading}
      valueColor="secondary"
      title={<Trans>Pending Total Balance</Trans>}
      tooltip={
        <Trans>
          This is the total balance + pending balance: it is what your balance
          will be after all pending transactions are confirmed.
        </Trans>
      }
      value={
        <>
          {toto_to_tranzact_string(value)} {currencyCode}
        </>
      }
    />
  );
}
