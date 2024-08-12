import React from 'react'

const footer = () => {
    return (
        <div className='bg-slate-800 text-white flex flex-col justify-center items-center w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className="text-green-500">&lt;</span>
                Pass
                <span className="text-green-500">OP/&gt;</span>
            </div>
            <div className='flex'>
                Created with <img className="h-7 px-2" src="icons/heart.png" alt="" /> by me[Ekta]
            </div>
        </div>
    )
}

export default footer

