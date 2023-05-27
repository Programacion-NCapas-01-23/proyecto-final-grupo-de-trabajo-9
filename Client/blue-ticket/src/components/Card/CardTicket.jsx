import React from 'react'

export const CardTicket = () => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-t-3xl overflow-hidden w-full sm:w-64 ">
                <img className="w-full h-44 sm:h-80" src="https://i.pinimg.com/originals/1f/81/88/1f818876783092801d6db8ecc3d46688.jpg" alt="Artista" />
                <div className="bg-blue h-10">
                    <h2 className="text-white font-bold text-2xl text-center">Esteman</h2>
                </div>
            </div>
        </>
    )
}
export default CardTicket;