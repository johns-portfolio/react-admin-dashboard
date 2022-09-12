import React from 'react'
import { BsEye } from 'react-icons/bs'

const users = [
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Software Engineer'
  },
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Developer'
  },
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Developer'
  },
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Developer'
  },
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Developer'
  },
  {
    img: 'https://www.allkpop.com/upload/2021/08/content/311237/1630427830-untitled-1.jpg',
    name: 'John S.',
    position: 'Developer'
  }
]

const NewJoinMember = () => {
  return (
    <div className="shadow-lg px-6 py-4">
      <h1 className="text-2xl">New Join Members</h1>
      <div className="flex flex-col gap-4 mt-4">
        {users.map((c, i) => (
          <div key={i} className="flex flex-row gap-10 items-center">
            <img
              src={c.img}
              className="w-12 h-12 object-cover rounded-full ring-1 border-white border-2"
            />
            <div className="flex flex-col flex-1">
              <span className="text-lg font-bold">{c.name}</span>
              <span className="text-lg font-light">{c.position}</span>
            </div>
            <div className="flex flex-row items-center gap-2 bg-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg cursor-pointer">
              <BsEye />
              <span>Display</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NewJoinMember
