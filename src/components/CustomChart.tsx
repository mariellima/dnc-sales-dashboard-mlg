import { useTheme } from 'styled-components'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import type { CustomChartProps } from '@/types'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
)

function CustomChart(props: CustomChartProps) {
  const { labels, data, type } = props
  const theme = useTheme()
  const options = {
    responsive: true,
    scaleShowVerticalLines: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: theme.appDefaultStroke,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }
  const chartData = {
    labels,
    datasets: [
      {
        label: 'Dataset',
        data: data,
        backgroundColor: 'rgba(12, 112, 242, 1)',
        borderColor: 'rgb(12, 112, 242)',
      },
    ],
  }
  return type === 'bar' ? (
    <Bar data={chartData} options={options} />
  ) : (
    <Line data={chartData} options={options} />
  )
}

export default CustomChart
