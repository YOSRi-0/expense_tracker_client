import React from 'react';
import { useSelector } from 'react-redux';
import { selectTransactionsData } from '../../redux/transaction/transaction.selectors';
import formatDate from '../../utils/formatDate';
import {
  Backdrop,
  Container,
  DeleteIconContainer,
  EditIconContainer,
  IconsContainer,
  Left,
  Modal,
  Right,
  Title,
  Transaction,
  TransactionAmount,
  TransactionCategory,
  TransactionDate,
  TransactionIcon,
  TransactionInfo,
  TransactionsContainer,
} from './all-transactions.styles';
import { ReactComponent as EditIcon } from '../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';

const AllTransactions = ({ showTransactions, setShowTransactions }) => {
  const transactions = useSelector(selectTransactionsData);

  return (
    <Modal
      style={{
        'min-width': '100vw',
        'min-height': '100vh',
        'max-width': '100vw',
        'max-height': '100vh',
        'background-color': 'transparent',
      }}
    >
      <Backdrop onClick={() => setShowTransactions(!showTransactions)} />
      <Container>
        <Title>Transactions</Title>
        <TransactionsContainer>
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
          ))}
        </TransactionsContainer>
      </Container>
    </Modal>
  );
};

export default AllTransactions;
