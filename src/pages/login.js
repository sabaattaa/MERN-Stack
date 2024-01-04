import React from 'react'
import Header1 from '../componets/header1'

export default function Login() {
  return (
    <>
     <Header1 />
    <div className='h-screen w-screen bg-gray-200 flex flex-col justify-center items-center'>
        <h1 className='font-bold text-3xl text-green-700'>Login Form</h1>
        <div className='p-10 bg-green-200 w-3/6 h-5/6 '>
            <form className='flex flex-col gap-y-7'>
                <h1 className='h-7 p-2 '>username</h1>
                <input  className='h-7 p-2 '/>
                <h1 className='h-7 p-2 '>email</h1>
                <input  className='h-7 p-2 '/>
                <h1 className='h-7 p-2 '>password</h1>
                <input  className='h-7 p-2 '/>
                <button className='h-7 p-2 bg-green-400 flex items-center justify-center p-4'> Log In</button>
            </form>
        </div>
         </div>
         </>
  )
}
