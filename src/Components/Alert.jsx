import React from 'react'
import DeleteIcon from '../Svg/DeleteIcon'

const Alert = ({ children }) => {
    return (
        <div className='bg-[#f7c504] rounded-2xl h-[100px] p-4 my-8 relative text-black'>
            <div
                className="bottom-sheet-close !p-1"
            >
                <DeleteIcon />
            </div>
            <div className="absolute right-0 top-0">
                <img src="./images/modal_image.png" alt="" />
            </div>
            <div className='text-2xl font-semibold text-[#3f3008]'>
                {children}
            </div>
        </div>
    )
}

export default Alert