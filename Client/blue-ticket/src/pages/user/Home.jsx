import React from 'react';
import NavbarHomepage from '../../components/Navbars/NavbarHomepage';
import Carousel from '../../components/Carousel/Carousel';
import CardHome from '../../components/Card/CardHome';
import Footer from '../../components/Footer/Footer';


export const Home = () => {

    return (
        <>
        <NavbarHomepage/>
        <Carousel />
        <div>
            <h1 className='text-center text-4xl font-bold'>Cartelera</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" style={{justifyItems: 'center', alignItems: 'center'}} >
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