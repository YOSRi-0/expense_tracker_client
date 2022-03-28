import React, { useState } from 'react';
import Form from '../form/form.component';
import {
  AddFormContainer,
  AddTransactionContainer,
  ExampleText,
  SubTitle,
  Title,
  VoiceInput,
} from './add-transaction.styles';

const AddTransaction = () => {
  const [types, setTypes] = useState({ isOpen: false, value: 'type' });
  return (
    <AddTransactionContainer>
      <Title>Add Transaction</Title>
      <SubTitle>Voice completion</SubTitle>
      <ExampleText>
        Add [Expenses/Income] for $[amount] in [Category] for next [date]
      </ExampleText>
      <AddFormContainer>
        <VoiceInput>
          {/* ADD INCOME FOR HUNDRED DOLLARS IN CATEGORY DEPOSITS FOR NEXT TUESDAY */}
        </VoiceInput>
        <Form />
      </AddFormContainer>
    </AddTransactionContainer>
  );
};

export default AddTransaction;
