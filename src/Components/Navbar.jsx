import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#205781] , text-white , p-2 , flex , justify-between , rounded-xl , m-0.5 , max-w-[60%] , mx-auto '>
        <span className='text-2xl , font-bold , mx-7 '>MyToDoo</span>
      <ul className='flex , gap-4 , mr-7 ,  '>
        <li className='hover:font-bold , cursor-pointer'>Home</li>
        <li className='hover:font-bold , cursor-pointer'>Tasks</li>
      </ul>
    </div>
  )
}

export default Navbar
