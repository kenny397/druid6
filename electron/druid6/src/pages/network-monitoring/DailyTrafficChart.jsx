import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import { range } from '../../services/utils';

import './DailyTrafficChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = range(1, 31);

const transmitData = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
const recieveData = labels.map(() => faker.datatype.number({ min: 0, max: 1000 }));
const txRxSumData = labels.map((ele, idx) => transmitData[idx] + recieveData[idx]);

console.log(transmitData, recieveData, txRxSumData);
export const data = {
  labels,
  datasets: [
    {
      label: 'Transmit',
      data: transmitData,
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Receive',
      data: recieveData,
      backgroundColor: 'rgb(75, 192, 192)',
    },
  ],
};

export default function DailyTrafficChart() {
  return (
    <div className='DailyTrafficChart'>
      <Bar
        options={options} 
        data={data}
      />
    </div>
  );
}
