import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  Line
} from 'recharts'

interface Report {
  Name: string
  Sales: number
  Profit: number
}
const reportData: Report[] = [
  {
    Name: 'Jan',
    Sales: 100,
    Profit: 90
  },
  {
    Name: 'Feb',
    Sales: 90,
    Profit: 45
  },
  {
    Name: 'Mar',
    Sales: 80,
    Profit: 10
  },
  {
    Name: 'Apr',
    Sales: 50,
    Profit: 40
  },
  {
    Name: 'May',
    Sales: 30,
    Profit: 20
  },
  {
    Name: 'Jun',
    Sales: 10,
    Profit: 5
  },
  {
    Name: 'Jul',
    Sales: 40,
    Profit: 10
  },
  {
    Name: 'Aug',
    Sales: 60,
    Profit: 15
  },
  {
    Name: 'Sep',
    Sales: 80,
    Profit: 50
  },
  {
    Name: 'Oct',
    Sales: 90,
    Profit: 60
  },
  {
    Name: 'Nov',
    Sales: 50,
    Profit: 40
  },
  {
    Name: 'Dec',
    Sales: 30,
    Profit: 15
  }
]

const chartKey: keyof Report = 'Name'
const salesKey: keyof Report = 'Sales'
const profitKey: keyof Report = 'Profit'

const UserAnalytics = () => {
  return (
    <div className="flex flex-col shadow-lg p-6 my-4">
      <h1 className="text-2xl font-bold">User Analytics</h1>
      <div className="w-full mt-4">
        <ResponsiveContainer height={400}>
          <LineChart
            data={reportData}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
            <XAxis dataKey={chartKey} />
            <Tooltip />
            <CartesianGrid strokeDasharray={"3"} />
            <Line
              type="monotone"
              dataKey={salesKey}
              stroke="#ff7300"
              yAxisId={0}
            />
            <Line
              type="monotone"
              dataKey={profitKey}
              stroke="#387908"
              yAxisId={1}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default UserAnalytics
