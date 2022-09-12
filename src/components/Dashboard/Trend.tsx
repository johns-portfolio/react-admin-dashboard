import React from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

const data = [
  {
    name: 'Revanue',
    amount: 2415,
    diff: -11.4
  },

  {
    name: 'Sales',
    amount: 4415,
    diff: -1.4
  },

  {
    name: 'Cost',
    amount: 2225,
    diff: 2.4
  }
]

const Trend = () => {
  return (
    <div className="flex flex-row flex-wrap gap-2 justify-between">
      {data.map((c, i) => (
        <div key={i} className="shadow-lg px-6 py-4 flex flex-col flex-1 gap-2">
          <h1 className="text-2xl">{c.name}</h1>
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-4xl flex-1">{c.amount}</h1>
            <span>{c.diff}</span>
            {c.diff >= 0 ? (
              <BsArrowUp size={16} className="text-green-500" />
            ) : (
              <BsArrowDown size={16} className="text-red-500" />
            )}
          </div>
          <span>Compared to last month</span>
        </div>
      ))}
    </div>
  )
}

export default Trend
