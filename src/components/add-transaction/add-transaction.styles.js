import styled, { keyframes, css } from 'styled-components';

const FlexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddTransactionContainer = styled.div`
  overflow: hidden;
  ${
    '' /* & > * + * {
    margin-top: 24px; */
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #303234;
  margin-bottom: 24px;
`;

export const SubTitle = styled.h4`
  font-size: 1rem;
  font-weight: 400;
  width: 80%;
  color: #303234;
  margin-bottom: 12px;
`;

export const ExampleText = styled.p`
  font-size: 1rem;
  font-weight: 300;
  width: 80%;
  color: #757a7f;
  line-height: 1.6;
  margin-bottom: 38px;
`;

export const AddFormContainer = styled.div`
  background-color: #303234;
  border-radius: 50px;
  width: 100%;
  min-height: 100%;
  padding: 26px 60px;
  overflow: auto;

  @media (max-width: 680px) {
    padding: 26px 35px;
  }
`;

export const VoiceInput = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  text-transform: uppercase;
  text-align: center;
  color: #dfdfdf;
  margin: 18px auto;
`;

export const Form = styled.form`
  width: 100%;
`;
