import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionStart } from '../../redux/transaction/transaction.actions';
import {
  selectTransactionsData,
  selectTransactionsPreview,
} from '../../redux/transaction/transaction.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import formatDate from '../../utils/formatDate';
import {
  Currency,
  HeaderText,
  LastTransactions,
  LastTransactionsHeader,
  Left,
  Title,
  Total,
  TotalContainer,
  TransactionAmount,
  TransactionCategory,
  Transaction,
  TransactionDate,
  TransactionIcon,
  TransactionInfo,
  TransactionsContainer,
  Type,
  TypeLabel,
  Types,
  TypeTotal,
} from './transactions.styles';

const Transactions = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const transactions = useSelector(selectTransactionsPreview);

  useEffect(() => {
    dispatch(fetchTransactionStart(currentUser));
  }, [dispatch, currentUser]);

  return (
    <TransactionsContainer>
      <Title>Total Balance</Title>
      <TotalContainer>
        <Currency>$</Currency>
        <Total>32.500</Total>
      </TotalContainer>
      <Types>
        <Type>
          <TypeLabel>Income</TypeLabel>
          <TypeTotal color="#00B365">$52.200</TypeTotal>
        </Type>
        <Type>
          <TypeLabel>Expense</TypeLabel>
          <TypeTotal color="#A14D4D">$20.300</TypeTotal>
        </Type>
      </Types>
      <LastTransactions>
        <LastTransactionsHeader>
          <HeaderText>Last Transactions</HeaderText>
          <HeaderText>See all</HeaderText>
        </LastTransactionsHeader>
        {transactions.map((transaction) => {
          const type =
            transaction.list === currentUser.types.expenseId
              ? 'expense'
              : 'income';
          return (
            <Transaction key={transaction._id}>
              <Left>
                <TransactionIcon type={type} />
                <TransactionInfo>
                  <TransactionCategory>{transaction.name}</TransactionCategory>
                  <TransactionDate>
                    {formatDate(transaction.date)}
                  </TransactionDate>
                </TransactionInfo>
              </Left>
              <TransactionAmount type={type}>
                {type === 'expense' ? '- ' : '+ '}
                {transaction.amount}
              </TransactionAmount>
            </Transaction>
          );
        })}
      </LastTransactions>
    </TransactionsContainer>
  );
};

export default Transactions;
