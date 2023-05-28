import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faEye } from '@fortawesome/free-solid-svg-icons';

export const ChangePassword = () => {
  return (
    <div className='flex flex-col h-screen bg-gradient-to-b from-[#232528] to-blue-200'>
      <div className='grid place-items-center mx-2 my-20 sm:my-auto' x-data="{ showPass: true }">
        <div className='w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg'>
          <div className='text-center mb-11'>
            <h6 className='font-semibold  text-xl'>Cambiar contraseña</h6>
          </div>
          <form className='space-y-5' method="POST">
            <div className='relative mt-2 rounded shadow-sm'>
              <input
                type="email"
                className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 
                transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none 
                peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] 
                [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id="floatingInput"
                placeholder="name@example.com" />
              <label
                for="floatingInput"
                className='w-full  pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 
                ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 
                peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
              >Correo</label>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='h-5 m-4 mx-3' />
              </div>
            </div>

            <div className='relative mt-2 rounded shadow-sm'>
              <input
                type="password"
                className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 
                transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none 
                peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] 
                [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id="floatingInput"
                placeholder="name@example.com" />
              <label
                for="floatingInput"
                className='w-full  pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 
                ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 
                peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
              >Nueva contraseña</label>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <FontAwesomeIcon icon={faKey} className='h-5 mx-3' />
              </div>
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                <FontAwesomeIcon icon={faEye} className='h-4' />
              </div>
            </div>

            <div className='relative mt-2 rounded shadow-sm'>
              <input
                type="password"
                className='peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-gray bg-clip-padding py-2 pr-3 pl-10 mt-2 text-base font-normal leading-tight text-neutral-700 
                transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none 
                peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] 
                [&:not(:placeholder-shown)]:pt-[1.625rem]'
                id="floatingInput"
                placeholder="name@example.com" />
              <label
                for="floatingInput"
                className='w-full  pl-11 pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-700 transition-[opacity,_transform] duration-200 
                ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 
                peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary'
              >Confirmar contraseña</label>
              <div className='absolute inset-y-0 left-0 flex items-center'>
                <FontAwesomeIcon icon={faKey} className='h-5 mx-3' />
              </div>
              <div className='absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5'>
                <FontAwesomeIcon icon={faEye} className='h-4' />
              </div>
            </div>

            <button type="submit" className='w-full py-3 mt-10 bg-blue rounded-md
                        font-medium text-white capitalize
                        focus:outline-none hover:shadow-none'>
              Cambiar contraseña
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword;