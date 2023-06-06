import React from 'react';
import NavbarHomepage from '../../components/Navbars/NavbarHomepage';
import Carousel from '../../components/Carousel/Carousel';
import CardHome from '../../components/Card/CardHome';
import Footer from '../../components/Footer/Footer';


export const Home = () => {

    return (
        <>
            <Carousel />
            <div>
                <h1 className='text-center text-4xl font-bold'>Cartelera</h1>

                <div className='flex justify-center  mt-5'>
                    <button className='relative text-sm px-2 py-1 md:p-3 bg-white leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl'>
                        <form action='#'>
                            <select className='text-xs md:text-lg text-center items-center bg-white'>
                                <option value="opcion1">Musical</option>
                                <option value="opcion2">Danza</option>
                                <option value="opcion3">Teatro</option>
                            </select>
                        </form>
                    </button>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" style={{ justifyItems: 'center', alignItems: 'center' }} >
                    <CardHome />
                    <CardHome />
                    <CardHome />

                    <CardHome />
                    <CardHome />
                    <CardHome />

                    <CardHome />
                    <CardHome />
                    <CardHome />
                </div>
                <Footer />
            </div>


        </>
    );
};

export default Home;