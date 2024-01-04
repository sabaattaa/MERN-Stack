import React from 'react'

export default function Header2() {
    return (
        <div className=' shadow-lg h-20 bg-gray-400 flex justify-between px-10 items-center text-3xl font-bold'>
            <div className='flex gap-x-5 flex-row items-center '>
                <label className='bg-green-500 p-4 rounded-xl shadow-xl'>Food Screets</label>
                <label className='text-xl bg-gray-300 p-2 rounded-md cursor-pointer'>Home</label>
                <label className='text-xl bg-gray-300 p-2 rounded-md cursor-pointer'>Chickan</label>
                <label className='text-xl bg-gray-300 p-2 rounded-md cursor-pointer'>Vegitable</label>
                <label className='text-xl bg-gray-300 p-2 rounded-md cursor-pointer'>Cold Drinks</label>
            </div>
            <div className='text-xl flex gap-x-5'>
                <label className='bg-gray-200 p-2 rounded-md cursor-pointer hover:bg-gray-300 '>Logout</label>
            </div>

        </div>
    )
}
