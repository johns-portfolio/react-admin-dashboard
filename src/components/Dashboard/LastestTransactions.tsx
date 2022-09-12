import dayjs from 'dayjs'
import React, { useState } from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'
import { NumericFormat } from 'react-number-format'

interface Customer {
  img: string
  customer: string
  date: Date
  amount: number
  status: 'Approved' | 'Declined' | 'Pending'
}

const customers: Customer[] = [
  {
    img: 'https://i.pinimg.com/736x/7c/3a/72/7c3a721cc608405c7ea20d57156212c6.jpg',
    customer: 'Ausan Carol',
    date: new Date(),
    amount: 122,
    status: 'Approved'
  },
  {
    img: 'https://i.pinimg.com/736x/7c/3a/72/7c3a721cc608405c7ea20d57156212c6.jpg',
    customer: 'Susan Carol',
    date: new Date(),
    amount: 5000,
    status: 'Declined'
  },
  {
    img: 'https://i.pinimg.com/736x/7c/3a/72/7c3a721cc608405c7ea20d57156212c6.jpg',
    customer: 'Busan Carol',
    date: new Date(),
    amount: 42,
    status: 'Pending'
  },
  {
    img: 'https://i.pinimg.com/736x/7c/3a/72/7c3a721cc608405c7ea20d57156212c6.jpg',
    customer: 'Susan Carol',
    date: new Date(),
    amount: 1000,
    status: 'Approved'
  }
]

const columns: (keyof Customer)[] = ['customer', 'date', 'amount', 'status']

const LastestTransactions = () => {
  const [sortedBy, setSortedBy] = useState('customer')
  const [data, setData] = useState(customers)

  const sort = (column: keyof Customer) => {
    setSortedBy(column)
    console.log('🔥 column', column)
    setData((prev) => {
      const newData = prev.sort((a: any, b: any) => {
        if (a[column] < b[column]) {
          return -1
        } else if (a[column] > b[column]) {
          return 1
        }

        return 0
      })
      console.log('🔥 newData', newData)

      return newData
    })
  }

  return (
    <div className="px-4 py-4 shadow-lg flex-1">
      <h1 className="text-2xl">Lastest Transactions</h1>
      <div className="flex mt-4">
        <table width={'100%'}>
          <thead>
            <tr>
              {columns.map((c) => (
                <th key={c}>
                  <div
                    className="flex flex-row gap-1 items-center py-2 cursor-pointer"
                    onClick={() => sort(c)}
                  >
                    <span className="capitalize">{c}</span>
                    {sortedBy === c && <BsArrowUp className="text-gray-500" />}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="hover:bg-gray-100">
                <td>
                  <div className="flex flex-row items-center gap-2 py-2">
                    <img
                      src={item.img}
                      className="w-12 h-12 object-cover rounded-full ring-1 border-2 border-white"
                    />
                    <span>{item.customer}</span>
                  </div>
                </td>
                <td>{dayjs(item.date).format('D MMM YYYY')}</td>
                <td>
                  {new Intl.NumberFormat('en-US', {
                    currency: 'USD',
                    style: 'currency'
                  }).format(item.amount)}
                </td>
                <td>
                  <span
                    className={`px-2 py-1 rounded-xl ${
                      item.status === 'Approved'
                        ? 'text-green-600 bg-green-200'
                        : item.status === 'Pending'
                        ? 'text-blue-600 bg-blue-200'
                        : 'text-red-600 bg-red-200'
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LastestTransactions
