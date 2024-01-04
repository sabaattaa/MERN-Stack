import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' shadow-lg h-20 bg-gray-400 flex justify-between px-10 items-center text-3xl font-bold'>
      <div className='flex flex-row bg-green-500 p-4 rounded-xl shadow-xl'><label>Food Screets</label></div>
      <div className='text-xl flex gap-x-5'>
        <Link to="login" className='bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300 '>Login</Link>
        <Link to="signup" className='bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300 '>Signup</Link>
      </div>

    </div>
  )
}
