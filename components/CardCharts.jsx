'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Valores de la ultima hora',
    },
  },
}

const labels = new Array(60).fill(10)

const data = {
  labels,
  datasets: [
    {
      label: 'Valores',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 7, 2, 33, 20, 21, 22, 23, 25, 25, 26, 27, 28, 29, 30, 31, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
        41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 22, 53, , 54, 55, 56, 57, 58, 10, 60
      ],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

function CardCharts() {
  return (
    <div
      className="w-full h-[45%] rounded-lg p-2 bg-white bg-clip-border shadow-md md:h-[65%]"
    >
      <Bar options={options} data={data} />
    </div>
  )
}

export default CardCharts