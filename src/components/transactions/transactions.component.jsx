import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTransactionStart } from '../../redux/transaction/transaction.actions';
import {
  selectBalance,
  selectExpenseTotal,
  selectIncomeTotal,
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
  IconsContainer,
  DeleteIconContainer,
  EditIconContainer,
  Right,
} from './transactions.styles';
import { ReactComponent as EditIcon } from '../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

const Transactions = ({ setShowTransactions, showTransactions }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const transactions = useSelector(selectTransactionsPreview);
  const incomeTotal = useSelector(selectIncomeTotal);
  const expenseTotal = useSelector(selectExpenseTotal);
  const balance = useSelector(selectBalance);

  useEffect(() => {
    dispatch(fetchTransactionStart(currentUser));
  }, [dispatch, currentUser]);

  return (
    <TransactionsContainer>
      <Title>Total Balance</Title>
      <TotalContainer>
        <Currency>$</Currency>
        <Total>{balance}</Total>
      </TotalContainer>
      <Types>
        <Type>
          <TypeLabel>Income</TypeLabel>
          <TypeTotal color="#00B365">${incomeTotal}</TypeTotal>
        </Type>
        <Type>
          <TypeLabel>Expense</TypeLabel>
          <TypeTotal color="#A14D4D">${expenseTotal}</TypeTotal>
        </Type>
      </Types>
      <LastTransactions>
        <LastTransactionsHeader>
          <HeaderText>Last Transactions</HeaderText>
          <HeaderText
            style={{ cursor: 'pointer' }}
            onClick={() => setShowTransactions(!showTransactions)}
          >
            See all
          </HeaderText>
        </LastTransactionsHeader>
        {transactions.map((transaction) => {
          return (
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
              <Right>
                <TransactionAmount type={transaction.type}>
                  {transaction.type === 'expense' ? '- ' : '+ '}
                  {transaction.amount}
                </TransactionAmount>
                <IconsContainer>
                  <DeleteIconContainer>
                    <DeleteIcon />
                  </DeleteIconContainer>
                  <EditIconContainer>
                    <EditIcon />
                  </EditIconContainer>
                </IconsContainer>
              </Right>
            </Transaction>
          );
        })}
      </LastTransactions>
    </TransactionsContainer>
  );
};

export default Transactions;
