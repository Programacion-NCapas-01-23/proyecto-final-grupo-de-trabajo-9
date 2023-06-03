import React from 'react';
import NavbarUser from '../../components/Navbars/NavbarUser';
import Footer from '../../components/Footer/Footer';
import LocationButton from '../../components/Button/LocationButton';
import CardTicket from '../../components/Card/CardTicket';

export const TicketPurchase = () => {
    return (
        <div>
            <NavbarUser/>
            <div className='m-auto mt-10 mb-10 w-11/12 lg:w-3/6 sm:w-9/12 h-auto bg-card-gray rounded-3xl'>
                <div className='flex flex-col items-center sm:gap-5'>
                    <h1 className='font-bold sm:text-2xl lg:text-3xl text-center pt-5'>Información de la compra</h1>
                    <div className='pt-4'>
                        <CardTicket/>
                    </div>
                    <div className='bg-white h-auto w-11/12 sm:w-9/12 m-5 rounded-2xl'>
                        <div className='grid grid-cols-2 gap-5 p-5 '>
                        <p className='text-center md:text-lg'>Seleccione la localidad</p>
                            <div className='grid grid-cols-2 gap-3 '>
                            <LocationButton/>
                            <LocationButton/>
                            <LocationButton/>
                            <LocationButton/>
                            </div>
                        <p className='text-center md:text-lg'>N° de tickets a comprar</p>
                        <div className='flex flex-row items-center gap-5'>
                            <button className=' bg-red-600 hover:bg-red-700 text-white w-8 md:w-9 md:h-9 h-8 border rounded-full md:text-2xl font-bold'>-</button>
                            <p className=' text-lg md:text-xl'>1</p>
                            <button className='bg-green-500 hover:bg-green-600 w-8 h-8 md:w-9 md:h-9 rounded-full md:text-2xl text-white font-bold'>+</button>
                        </div>
                        </div>
                    </div>
                    <button className='bg-orange md:text-lg rounded-full text-white p-1 font-semibold mb-5 w-24 sm:w-28'>Siguiente</button>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default TicketPurchase;