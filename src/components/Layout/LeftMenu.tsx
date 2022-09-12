import React from 'react'
import {
  BsBarChart,
  BsCardList,
  BsCart,
  BsChat,
  BsChatText,
  BsDiagram2,
  BsEnvelope,
  BsFileText,
  BsHouse,
  BsPerson,
  BsShop
} from 'react-icons/bs'

const menuList = [
  {
    name: 'Dashboard',
    child: [
      {
        name: 'Home',
        icon: <BsHouse />
      },
      {
        name: 'Analytics',
        icon: <BsBarChart />
      },
      {
        name: 'Sales',
        icon: <BsCart />
      }
    ]
  },
  {
    name: 'Quick Menu',
    child: [
      {
        name: 'Users',
        icon: <BsPerson />
      },
      {
        name: 'Products',
        icon: <BsShop />
      },
      {
        name: 'Transactions',
        icon: <BsFileText />
      },
      {
        name: 'Reports',
        icon: <BsBarChart />
      }
    ]
  },
  {
    name: 'Notification',
    child: [
      {
        name: 'Mail',
        icon: <BsEnvelope />
      },
      {
        name: 'Feedback',
        icon: <BsChat />
      },
      {
        name: 'Messages',
        icon: <BsChatText />
      }
    ]
  },
  {
    name: 'Staff',
    child: [
      {
        name: 'Manage',
        icon: <BsDiagram2 />
      },
      {
        name: 'Analytics',
        icon: <BsBarChart />
      },
      {
        name: 'Reports',
        icon: <BsBarChart />
      }
    ]
  }
]

const LeftMenu = (props: any) => {
  return (
    <div
      {...props}
      className="flex flex-col gap-6 px-4 py-4 bg-violet-50 min-h-screen w-72"
    >
      {menuList.map((mainMenu, i) => (
        <div key={i} className="">
          <h2 className="font-bold text-gray-400">{mainMenu.name}</h2>
          {mainMenu.child.map((c) => (
            <div
              key={c.name}
              className="flex flex-row gap-2 items-center text-gray-700 px-4 py-2 rounded-lg hover:bg-violet-200"
            >
              {c.icon}
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default LeftMenu
