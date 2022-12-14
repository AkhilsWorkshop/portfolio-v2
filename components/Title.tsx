import React from 'react'

type Props = {
    sNo: string,
    name: string
}

const Title = ({ sNo, name }: Props) => {
    return (
        <div className="flex items-center justify-center text-secondary">
            <p className="text-xl md:text-3xl font-bold"><span className="text-primary">{sNo} </span>{name}</p>
            <div className="flex bg-gradient-to-r from-third h-[0.1rem] grow ml-5"></div>
        </div>
    )
}

export default Title