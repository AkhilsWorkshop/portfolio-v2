import React from 'react'

const Title = (sNo: Number, name: Number) => {
    return (
        <div className="flex items-center justify-center text-secondary">
            <p className="text-xl md:text-3xl font-bold"><span className="text-primary">{sNo} </span>{name}</p>
            <div className="flex bg-gradient-to-r from-third h-[0.1rem] grow ml-5"></div>
        </div>
    )
}

export default Title