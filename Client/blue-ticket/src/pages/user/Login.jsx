import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faEye } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { GoogleLogin } from '@leecheuk/react-google-login';

const Login = () => {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#232528] to-blue-200">
      <div className="grid place-items-center mx-2 my-20 sm:my-auto">
        <div className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 px-6 py-10 sm:px-10 sm:py-6 bg-white rounded-lg shadow-md lg:shadow-lg">
          <div>
            <h2 className="text-[#062343] font-poppins font-medium text-3xl md:text-4xl text-center mb-4">Bienvenidos/as</h2>
            <h2 className="text-[#062343] font-poppins font-black text-3xl md:text-4xl text-center mb-6">Blue ticket</h2>
          </div>
          <div className="flex justify-center mt-8">
            <GoogleLogin
              clientId="tu-client-id-de-google"
              buttonText="Iniciar sesión con Google"
              // onSuccess={handleLoginSuccess}
              // onFailure={handleLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="w-full max-w-xs flex items-center justify-center"
            />
          </div>
          <div className="mt-4 text-center">
            <div className="flex items-center justify-center">
              <div className="flex-grow border-b border-gray-300 w-2/5" />
              <p className="mx-2 text-gray-500 font-poppins">or</p>
              <div className="flex-grow border-b border-gray-300 w-2/5" />
            </div>
          </div>
          <div class="relative mt-2 rounded shadow-sm">
            <input
              type="email"
              class=" peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class=" w-full  pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Correo</label>
            <div class="absolute inset-y-0 left-0 flex items-center">
              <FontAwesomeIcon icon={faEnvelope} class="h-5 m-4 mx-3" />
            </div>
          </div>
          <div class="relative mt-2 rounded shadow-sm">
            <input
              type="password"
              class=" peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com" />
            <label
              for="floatingInput"
              class=" w-full  pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
            >Contraseña</label>
            <div class="absolute inset-y-0 left-0 flex items-center">
              <FontAwesomeIcon icon={faKey} class="h-5 mx-3" />
            </div>
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <FontAwesomeIcon icon={faEye} class="h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox text-blue-500 h-4 w-4" />
              <label htmlFor="remember" className="ml-2 text-gray-500 font-poppins">
                Recuérdame
              </label>
            </div>
            <a href="#" className="text-[#062343] font-poppins hover:underline">
              <em>¿Olvidaste tu contraseña?</em>
            </a>
          </div>
          <button type="submit" className="w-full py-3 mt-10 bg-blue rounded-md font-medium text-white capitalize focus:outline-none hover:shadow-none">
            <Link to="/myticket" className="text-white">
              Iniciar Sesión
            </Link>
          </button>

          <div className="mt-8 text-center">
            <p className="text-gray-500 font-poppins">
              ¿No tienes cuenta?{" "}
              <a href="#" className="text-blue-500 font-poppins underline">
                Regístrate
              </a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;