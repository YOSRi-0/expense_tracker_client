import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionsData } from '../../redux/transaction/transaction.selectors';
import formatDate from '../../utils/formatDate';
import {
  Backdrop,
  Container,
  Left,
  Modal,
  Title,
  Transaction,
  TransactionAmount,
  TransactionCategory,
  TransactionDate,
  TransactionIcon,
  TransactionInfo,
  Transactions,
  TransactionsContainer,
} from './all-transactions.styles';

const AllTransactions = ({ showTransactions, setShowTransactions }) => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactionsData);

  return (
    <Modal>
      <Backdrop onClick={() => setShowTransactions(!showTransactions)} />
      <Container>
        <TransactionsContainer>
          <Title>Transactions</Title>
          {transactions.map((transaction) => (
            <Transaction key={transaction._id}>
              <Left>
                <TransactionIcon type={transaction.type} />
                <TransactionInfo>
                  <TransactionCategory>{transaction.name}</TransactionCategory>
                  <TransactionDate>
                    {formatDate(transaction.date)}
                  </TransactionDate>
                </TransactionInfo>
              </Left>
              <TransactionAmount type={transaction.type}>
                {transaction.type === 'expense' ? '- ' : '+ '}
                {transaction.amount}
              </TransactionAmount>
            </Transaction>
          ))}
        </TransactionsContainer>
      </Container>
    </Modal>
  );
};

export default AllTransactions;
