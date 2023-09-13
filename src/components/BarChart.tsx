import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  [
    'Element',
    'Density',
    { role: 'style' },
    {
      sourceColumn: 0,
      role: 'annotation',
      type: 'string',
      calc: 'stringify',
    },
  ],
  ['JAN', 8.94, '#b87333', null],
  ['FEB', 10.49, 'silver', null],
  ['MAR', 19.3, 'gold', null],
  ['APR', 21.45, 'color: #e5e4e2', null],
];

export const options = {
  title: 'MONTHLY',
  width: 600,
  height: 400,
  bar: { groupWidth: '95%' },
  legend: { position: 'none' },
};

export default function BarChart() {
  return (
    <Chart
      chartType='BarChart'
      width='100%'
      height='400px'
      data={data}
      options={options}
    />
  );
}
