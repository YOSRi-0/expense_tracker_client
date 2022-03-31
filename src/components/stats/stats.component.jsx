import React from 'react';
import { ChartContainer, StatsContainer, Title } from './stats.styles';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';
import {
  selectExpenseData,
  selectIncomeData,
} from '../../redux/transaction/transaction.selectors';

const Stats = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const incomeData = useSelector(selectIncomeData);
  const expenseData = useSelector(selectExpenseData);

  const expenseCategories = expenseData.map((e) => e.name);
  const expenseAmountPerCategory = expenseData.map((e) => e.amount);
  const incomeCategories = incomeData.map((e) => e.name);
  const incomeAmountPerCategory = incomeData.map((e) => e.amount);
  const dataE = {
    labels: [...expenseCategories],
    datasets: [
      {
        label: '# of Expenses',
        data: [...expenseAmountPerCategory],
        backgroundColor: [
          'hsl(0 52% 70%)',
          'hsl(0 52% 65%)',
          'hsl(0 52% 60%)',
          'hsl(0 52% 55%)',
          'hsl(0 52% 50%)',
          'hsl(0 52% 45%)',
          'hsl(0 52% 40%)',
          'hsl(0 52% 35%)',
          'hsl(0 52% 30%)',
          'hsl(0 52% 25%)',
          'hsl(0 52% 20%)',
        ],
        borderWidth: 0.5,
      },
    ],
  };
  const dataI = {
    labels: [...incomeCategories],
    datasets: [
      {
        label: '# of Income',
        data: [...incomeAmountPerCategory],
        backgroundColor: [
          'hsl(139 53% 30%)',
          'hsl(139 53% 35%)',
          'hsl(139 53% 40%)',
          'hsl(139 53% 45%)',
          'hsl(139 53% 50%)',
          'hsl(139 53% 55%)',
          'hsl(139 53% 60%)',
          'hsl(139 53% 65%)',
          'hsl(139 53% 70%)',
        ],
        borderWidth: 0.5,
      },
    ],
  };
  return (
    <StatsContainer>
      <Title>Income</Title>
      <ChartContainer>
        <Doughnut data={dataI} options={{ maintainAspectRatio: false }} />
      </ChartContainer>
      <Title style={{ marginTop: '20px' }}>Expenses</Title>
      <ChartContainer>
        <Doughnut data={dataE} options={{ maintainAspectRatio: false }} />
      </ChartContainer>
    </StatsContainer>
  );
};

export default Stats;
