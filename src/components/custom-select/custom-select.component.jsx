import React, { useState } from 'react';
import {
  ArrowDownContainer,
  Option,
  Options,
  Select,
  SelectContainer,
  SelectDefaultValue,
} from './custom-select.styles';
import { ReactComponent as ArrowDown } from '../../assets/arrow-down.svg';

const CustomSelect = ({ types, setTypes }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <SelectContainer>
      <Select
        isSelectedValue={!!selectedValue}
        isActive={isActive}
        onClick={() => setIsActive(!isActive)}
      >
        <ArrowDownContainer
          isSelectedValue={!!selectedValue}
          isActive={isActive}
        >
          <ArrowDown />
        </ArrowDownContainer>
        <SelectDefaultValue isSelectedValue={!!selectedValue}>
          type
        </SelectDefaultValue>
        <Options isActive={isActive}>
          <Option onClick={() => setSelectedValue('expense')}>Expense</Option>
          <Option onClick={() => setSelectedValue('income')}>Income</Option>
        </Options>
      </Select>
    </SelectContainer>
  );
};

export default CustomSelect;
