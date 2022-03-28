import React from 'react';
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
        <Transaction>
          <Left>
            <TransactionIcon type="expense" />
            <TransactionInfo>
              <TransactionCategory>Cars</TransactionCategory>
              <TransactionDate>22 Mars 22</TransactionDate>
            </TransactionInfo>
          </Left>
          <TransactionAmount type="expense">- 2000</TransactionAmount>
        </Transaction>
        <Transaction>
          <Left>
            <TransactionIcon />
            <TransactionInfo>
              <TransactionCategory>Freelance</TransactionCategory>
              <TransactionDate>22 Mars 22</TransactionDate>
            </TransactionInfo>
          </Left>
          <TransactionAmount type="income">+ 5000</TransactionAmount>
        </Transaction>
        <Transaction>
          <Left>
            <TransactionIcon type="expense" />
            <TransactionInfo>
              <TransactionCategory>Cars</TransactionCategory>
              <TransactionDate>22 Mars 22</TransactionDate>
            </TransactionInfo>
          </Left>
          <TransactionAmount type="expense">- 2000</TransactionAmount>
        </Transaction>
        <Transaction>
          <Left>
            <TransactionIcon />
            <TransactionInfo>
              <TransactionCategory>Freelance</TransactionCategory>
              <TransactionDate>22 Mars 22</TransactionDate>
            </TransactionInfo>
          </Left>
          <TransactionAmount type="income">+ 5000</TransactionAmount>
        </Transaction>
      </LastTransactions>
    </TransactionsContainer>
  );
};

export default Transactions;
