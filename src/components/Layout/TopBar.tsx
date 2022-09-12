import React from 'react'
import { BsBell, BsFillBellFill, BsGear, BsGlobe } from 'react-icons/bs'
import IconNoti from './IconNoti'

const TopBar = () => {
  return (
    <div className="flex flex-row justify-between items-center py-4 px-4">
      <div className="text-2xl font-bold text-violet-700">John Admin</div>
      <div className="flex flex-row gap-4 items-center">
        <IconNoti value={2} icon={<BsBell size={20} />} />
        <IconNoti value={2} icon={<BsGlobe size={20} />} />
        <IconNoti value={0} icon={<BsGear size={20} />} />
        <img className='rounded-full w-10 h-10 object-cover ring-1 ring-blue-500 border-white border-2'
          src={
            'https://image.shutterstock.com/image-photo/beauty-portrait-young-asian-woman-260nw-2137575001.jpg'
          }
        />
      </div>
    </div>
  )
}

export default TopBar
