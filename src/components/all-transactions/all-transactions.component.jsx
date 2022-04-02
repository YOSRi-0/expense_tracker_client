import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTransactionsData } from '../../redux/transaction/transaction.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { deleteTransactionStart } from '../../redux/transaction/transaction.actions';
import formatDate from '../../utils/formatDate';
import {
  Backdrop,
  Container,
  DeleteIconContainer,
  EditIconContainer,
  IconsContainer,
  Left,
  Modal,
  NoItemsMessage,
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
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactionsData);
  const currentUser = useSelector(selectCurrentUser);

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
          {transactions.length === 0 && (
            <NoItemsMessage>No Transactions</NoItemsMessage>
          )}
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
                  <DeleteIconContainer
                    onClick={() =>
                      dispatch(
                        deleteTransactionStart(transaction._id, currentUser)
                      )
                    }
                  >
                    <DeleteIcon />
                  </DeleteIconContainer>
                  {/* <EditIconContainer>
                    <EditIcon />
                  </EditIconContainer> */}
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
