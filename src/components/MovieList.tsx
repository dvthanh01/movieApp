import React from 'react'

const MovieList = ({ title }) => {
    return (
        <div className='text-white p-10 mb-10'>
            <h2 className='uppercase text-xl font-bold'>{title}</h2>
            <div className='flex items-center space-x-4'>
                <div className='w-[200px] h-[300px] bg-red-500'></div>
            </div>
        </div>
    )
}

export default MovieList
