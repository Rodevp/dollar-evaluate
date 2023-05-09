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

import { useEffect, useMemo, useState } from 'react'

import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function CardCharts() {

    const [data, setData] = useState([])

    useEffect(() => {
      
      fetch('/api/history/', {
        next: {
          revalidate: 60
        }
      })
        .then(response => response.json())
        .then(valueCharts => {
          setData( valueCharts?.value?.filter(value => value !== '') )
        })
        .catch(err => {
          setData([])
        })

    }, [])

    const labels = useMemo(() => {
      return data?.map( value => Number( value?.replace('.', '') ).toLocaleString("en") )
    }, [data]) 

    const optionChart = useMemo(() => {
      return {
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
    }, [])

    const datasetData = useMemo(() => {
      return data?.map( value => Number( value?.replace('.', '') ) )
    }, [data])

    const dataChart = useMemo(() => {
      return {
        labels,
        datasets: [
          {
            label: 'Valores',
            data: datasetData,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      }
    }, [datasetData])


    return (
      <div
        className="w-full h-[45%] rounded-lg p-2 bg-white bg-clip-border shadow-md md:h-[65%]"
      >
        <Bar options={optionChart} data={dataChart} />
      </div>
    )
  }

export default CardCharts