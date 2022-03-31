import styled from 'styled-components';

export const TrackerPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: calc(4% / 3);

  & > * {
    background-color: #f4f3f3;
    border-radius: 50px;
    border: 1px solid #707070;
    height: 650px;
    min-height: 650px;
    max-width: 471px;
    min-width: 300px;
    width: 32%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
    margin-bottom: 18px;

    @media (max-width: 1200px) {
      width: 100%;
      max-width: unset;
    }
  }
`;
