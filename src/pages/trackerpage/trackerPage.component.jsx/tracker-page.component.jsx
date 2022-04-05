import React, { useState } from 'react';
import AddTransaction from '../../../components/add-transaction/add-transaction.component';
import AllTransactions from '../../../components/all-transactions/all-transactions.component';
import Stats from '../../../components/stats/stats.component';
import Transactions from '../../../components/transactions/transactions.component';
import { TrackerPageContainer } from './tracker-page.styles';
import Header from '../../../components/header/header.component';

const TrackerPage = () => {
  const [showTransactions, setShowTransactions] = useState(false);
  return (
    <TrackerPageContainer>
      <Header />
      <Transactions
        setShowTransactions={setShowTransactions}
        showTransactions={showTransactions}
      />
      <AddTransaction />
      <Stats />
      {/* {showTransactions ? <AllTransactions /> : null} */}
      {showTransactions ? (
        <AllTransactions
          className="all-transactions"
          showTransactions={showTransactions}
          setShowTransactions={setShowTransactions}
        />
      ) : null}
    </TrackerPageContainer>
  );
};

export default TrackerPage;
