import { useNavigate } from 'react-router-dom';

import NavbarUser from "../../components/Navbars/NavbarUser";
import Footer from "../../components/Footer/Footer";
import Carousel from "../../components/Carousel/Carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';

export const ViewEvent = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/user/home');
    }
    const handlePurchase = () => {
        navigate('/user/purchase-ticket');
    }
    return (
        <>
            <Carousel />
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-5">Localidades</h1>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-4 mb-5 justify-items-center">
                        <div className="flex space-x-5">
                            <p className="text-2xl">La Playa</p>
                            <p className="font-bold text-2xl">$175</p>
                        </div>
                        <div className="flex space-x-5">
                            <p className="text-2xl">Platinum</p>
                            <p className="font-bold text-2xl">$125</p>
                        </div>
                        <div className="flex space-x-5">
                            <p className="text-2xl">VIP</p>
                            <p className="font-bold text-2xl">$100</p>
                        </div>
                        <div className="flex space-x-5">
                            <p className="text-2xl">Platea</p>
                            <p className="font-bold text-2xl">$75</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-3xl mb-5">Esteman</h1>
                    <div className="flex flex-col space-y-5">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faCalendar} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">Noviembre 26</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faClock} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">21:30</p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={faLocationDot} className='w-8 h-8 text-blue' />
                            <p className="text-2xl">Estadio Cuscatlan</p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center py-10 md:justify-between md:px-4">
                        <button className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold mb-2 md:mb-0" onClick={handlePurchase}>Comprar Ticket</button>
                        <button className="px-4 py-2 bg-blue rounded-md text-white font-bold" onClick={handleBack}>Regresar</button>
                    </div>
                </div>

            </div>


            <Footer />
        </>
    );
};

export default ViewEvent;