import { useNavigate } from 'react-router-dom';

export const CardHome = () => {
    const navigate = useNavigate();

    const hello = () => {
        navigate('/user/info-event');
    }
    return (
        <>
            <div className="bg-white m-auto md:m-0 shadow-lg rounded-t-3xl overflow-hidden w-9/12 md:w-2/3 lg:w-2/3 hover:cursor-pointer" onClick={hello} >
                <img className="w-full h-64 object-cover object-center rounded-t-lg" src="https://i.pinimg.com/originals/1f/81/88/1f818876783092801d6db8ecc3d46688.jpg" alt="Artista" />
                <div className=" bg-blue h-10">
                    <h2 className="text-white font-bold text-2xl text-center">Esteman</h2>
                </div>
            </div>


        </>
    );
};

export default CardHome;