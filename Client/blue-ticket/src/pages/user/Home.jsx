import React, { useState } from 'react';
import NavbarHomepage from '../../components/Navbars/NavbarHomepage';
import Carousel from '../../components/Carousel/Carousel';
import CardHome from '../../components/Card/CardHome';
import Footer from '../../components/Footer/Footer';
import ViewEvent from './ViewEvent';

const Home = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (value) => {
    setFilter(value);
    // Aquí puedes realizar la lógica de filtrado de eventos según la opción seleccionada
  };

  return (
    <>
      <Carousel />
      <div>
        <h1 className='text-center text-4xl font-bold mt-2'>Cartelera</h1>

        <div className='flex justify-center mt-5 space-x-2'>
          <button
            className={`relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl ${
              filter === 'Musical' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handleFilterChange('Musical')}
          >
            Musical
          </button>
          <button
            className={`relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl ${
              filter === 'Danza' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handleFilterChange('Danza')}
          >
            Danza
          </button>
          <button
            className={`relative text-sm px-2 py-1 md:p-3 leading-6 font-normal justify-center items-center focus:outline-none shadow border-2 border-locations-gray text-black rounded-xl ${
              filter === 'Teatro' ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handleFilterChange('Teatro')}
          >
            Teatro
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 justify-items-center mt-10 mx-auto max-w-7xl px-4" style={{ rowGap: '40px' }}>
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


        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
