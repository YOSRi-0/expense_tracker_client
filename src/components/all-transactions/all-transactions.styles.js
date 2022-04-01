import styled, { css } from 'styled-components';

const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Modal = styled.div`
  position: absolute;
  z-index: 100;
  min-width: 100vw;
  min-height: 100vh;
  top: 0;
  left: 0;
  border-radius: 0;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Backdrop = styled.div`
  background-color: rgba(36, 36, 36, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  min-width: 100vw;
  min-height: 100vh;
`;

export const Container = styled.div`
  width: 500px;
  max-height: 800px;
  border: 1px solid white;
  border-radius: 50px;
  background-color: #fff;
  position: relative;
  z-index: 102;
  overflow: hidden;
`;
export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #303234;
  text-align: center;
  margin: 24px auto;
`;

export const TransactionsContainer = styled.div`
  background-color: #fff;
  border-radius: 50px;
  width: 100%;
  min-height: 100%;
  padding: 26px 42px;
  overflow: auto;
  max-height: 800px;

  @media (max-width: 680px) {
    padding: 26px 35px;
  }
`;

export const Transaction = styled.div`
  ${FlexSpaceBetween}
  align-items: flex-start;
  margin-bottom: 30px;
  height: 50px;

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
  font-weight: 400;
  color: #303234;
`;
export const TransactionDate = styled.span`
  font-size: 0.875rem;
  font-weight: 400;
  color: #303234;
`;

export const TransactionAmount = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ type }) => (type === 'expense' ? '#A14D4D' : '#4DA167')};

  &:before {
    content: ${({ type }) => (type === 'expense' ? '- ' : '+ ')};
    color: ${({ type }) => (type === 'expense' ? '#A14D4D' : '#4DA167')};
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: column;
  min-height: 100%;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
`;

export const DeleteIconContainer = styled.div`
  width: 15px;
  height: 15px;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    & path {
      fill: #000000c7;
    }
  }

  & path {
    fill: #0000007d;
  }
`;

export const EditIconContainer = styled.div`
  width: 19px;
  height: 19px;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    & path {
      fill: #000000c7;
    }
  }

  & path {
    fill: #0000007d;
  }
`;
