import React from 'react';
import AddTransaction from '../../../components/add-transaction/add-transaction.component';
import Stats from '../../../components/stats/stats.component';
import Transactions from '../../../components/transactions/transactions.component';
import { TrackerPageContainer } from './tracker-page.styles';

const TrackerPage = () => {
  return (
    <TrackerPageContainer>
      <Transactions />
      <AddTransaction />
      <Stats />
    </TrackerPageContainer>
  );
};

export default TrackerPage;
