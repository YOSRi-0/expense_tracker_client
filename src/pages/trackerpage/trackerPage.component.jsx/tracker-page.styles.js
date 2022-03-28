import styled from 'styled-components';

export const TrackerPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    background-color: #f4f3f3;
    border-radius: 50px;
    border: 1px solid #707070;
    height: 650px;
    min-height: 650px;
    width: 471px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
  }
`;
