import React from 'react'

export default function Card({ src, tital, des }) {
    return (
        <div className='bg-red-200 ml-1 mt-1 flex flex-col w-44 p-3'>
            <img src={src} alt='img' className='h-20 w-20' />
            <p>{tital}</p>
            <p>{des}</p>
            <div className='flex flex-row gap-x-3'>
                <select>
                    {
                        Array.from(Array(6), (e, i) => {
                            return (<>
                                <option key={i + 1}>
                                    {i + 1}
                                </option></>)

                        })}
                </select>
                <select>
                    <option value={"half"}>Half</option>
                    <option value={"full"}>Full</option>
                </select>
            </div>
            <label className='font-semibold'>Price: Rs/</label>
            <button className='bg-blue-400 rounded-lg'>Add To Cart</button>
        </div>
    )
}
