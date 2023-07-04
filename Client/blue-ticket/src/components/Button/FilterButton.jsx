import React from 'react'

const FilterButton = (props) => {
    return (
        <button className='relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl'>
            {props.description}
        </button>
    )
}
export default FilterButton;