import React from 'react';
import { StatsContainer } from './stats.styles';
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

  const options = { maintainAspectRatio: true };
  const expenseCategories = expenseData.map((e) => e.name);
  const expenseAmountPerCategory = expenseData.map((e) => e.amount);
  const data = {
    labels: [...expenseCategories],
    datasets: [
      {
        label: '# of Votes',
        data: [...expenseAmountPerCategory],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        // borderColor: [
        //   'rgba(255, 99, 132, 1)',
        //   'rgba(54, 162, 235, 1)',
        //   'rgba(255, 206, 86, 1)',
        //   'rgba(75, 192, 192, 1)',
        //   'rgba(153, 102, 255, 1)',
        //   'rgba(255, 159, 64, 1)',
        // ],
        // borderWidth: 1,
      },
    ],
  };
  return (
    <StatsContainer>
      <Doughnut data={data} options={options} />
      <Doughnut data={data} options={options} />
    </StatsContainer>
  );
};

export default Stats;
