import React from 'react'

export default function Burger({state}) {
    return (
        <div className='burger-con'>
            <div className={`cursor-pointer burger-p`} onClick={() => state(false)}>
                <div className="burger-1"></div>
                <div className="burger-2"></div>
                <div className="burger-3"></div>
            </div>
        </div>
    )
}
