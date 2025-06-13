'use client'

import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface SubmissionChartProps {
  data: Record<string, number> | undefined
}

export function SubmissionChart({ data }: SubmissionChartProps) {
  if (!data) {
    return <div className="h-full flex items-center justify-center text-gray-500">
      No submission data available
    </div>
  }

  // Group submissions by month for better visualization
  const groupedByMonth = Object.entries(data).reduce((acc, [timestamp, count]) => {
    const date = new Date(parseInt(timestamp) * 1000)
    const monthKey = date.toLocaleString('default', { month: 'short', year: '2-digit' })
    
    if (!acc[monthKey]) {
      acc[monthKey] = 0
    }
    acc[monthKey] += count
    return acc
  }, {} as Record<string, number>)

  const sortedMonths = Object.entries(groupedByMonth)
    .sort(([aMonth], [bMonth]) => {
      const [aDate, bDate] = [new Date(aMonth + ' 1'), new Date(bMonth + ' 1')]
      return aDate.getTime() - bDate.getTime()
    })

  const chartData = {
    labels: sortedMonths.map(([month]) => month),
    datasets: [
      {
        label: 'Monthly Submissions',
        data: sortedMonths.map(([, count]) => count),
        fill: true,
        borderColor: 'rgb(139, 92, 246)',
        backgroundColor: 'rgba(139, 92, 246, 0.1)',
        tension: 0.4,
        pointRadius: 6,
        pointHoverRadius: 8,
        pointBackgroundColor: 'rgb(139, 92, 246)',
        pointBorderColor: 'white',
        pointBorderWidth: 2,
      },
    ],
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category' as const,
        grid: {
          display: false,
        },
        ticks: {
          color: 'rgb(156, 163, 175)',
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)',
        },
        ticks: {
          stepSize: 1,
          color: 'rgb(156, 163, 175)',
        }
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          title: (items: { label: string }[]) => `${items[0].label}`,
          label: (context: { parsed: { y: number } }) => `${context.parsed.y} submissions`
        }
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    }
  }

  // Add summary statistics
  const totalSubmissions = Object.values(data).reduce((sum, count) => sum + count, 0)
  const activeMonths = Object.keys(groupedByMonth).length

  return (
    <div className="w-full h-full p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Submission Activity
        </h3>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {totalSubmissions} submissions over {activeMonths} months
        </div>
      </div>
      <div className="h-[calc(100%-4rem)]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  )
}