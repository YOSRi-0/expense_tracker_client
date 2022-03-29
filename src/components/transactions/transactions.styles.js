import styled from 'styled-components';
import { css } from 'styled-components';

const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TransactionsContainer = styled.div`
  overflow: hidden;
  & > * + * {
    margin-top: 24px;
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #303234;
`;

export const TotalContainer = styled.div`
  display: inline-block;
  position: relative;
`;

export const Currency = styled.span`
  font-size: 1.375rem;
  font-weight: 300;
  position: absolute;
  top: -5px;
  left: -10px;
  color: #303234;
`;

export const Total = styled.span`
  font-size: 1.625rem;
  font-weight: 500;
  color: #303234;
`;

export const Types = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Type = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TypeLabel = styled.h3`
  font-size: 1rem;
  font-weight: 300;
  color: #303234;
`;

export const TypeTotal = styled.span`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ color }) => color};
`;

export const LastTransactions = styled.div`
  background-color: #303234;
  border-radius: 50px;
  width: 100%;
  min-height: 100%;
  padding: 26px 38px;
  overflow: auto;
`;

export const LastTransactionsHeader = styled.div`
  ${FlexSpaceBetween}
  margin-bottom: 8px;
`;

export const HeaderText = styled.h5`
  font-size: 0.875rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 45px;
`;

export const Transaction = styled.div`
  ${FlexSpaceBetween}
  align-items: flex-start;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 0px;
  }
`;

export const Left = styled.div`
  display: flex;
`;

export const TransactionIcon = styled.span`
  width: 50px;
  height: 50px;
  background-color: ${({ type }) =>
    type === 'expense' ? '#A14D4D' : '#4DA167'};
  border-radius: 50%;
  overflow: hidden;
`;

export const TransactionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
`;

export const TransactionCategory = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  color: #ffffff;
`;
export const TransactionDate = styled.span`
  font-size: 0.875rem;
  font-weight: 300;
  color: #b5b5b5;
`;

export const TransactionAmount = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ type }) => (type === 'expense' ? '#A14D4D' : '#4DA167')};

  &:before {
    content: ${({ type }) => (type === 'expense' ? '- ' : '+ ')};
    color: ${({ type }) => (type === 'expense' ? '#A14D4D' : '#4DA167')};
  }
`;
