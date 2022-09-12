import React from 'react'

const IconNoti = ({ icon, value }: { icon: any; value: number }) => {
  return (
    <div className="relative cursor-pointer hover:text-violet-700 hover:scale-110">
      {icon}
      {value > 0 && (
        <div className="absolute w-4 h-4 text-center bg-red-500 rounded-full text-white text-sm -top-2 -right-2">
          <span className="absolute -top-1 right-1">{value}</span>
        </div>
      )}
    </div>
  )
}

export default IconNoti
