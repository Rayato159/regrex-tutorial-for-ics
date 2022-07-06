import React from 'react'

export const ParagraphTitle = ({ props }) => {
    return (
        <div className="text-md md:text-md font-semibold bg-cyan-800 rounded-lg p-2 text-white">
            {props}
        </div>
    )
}