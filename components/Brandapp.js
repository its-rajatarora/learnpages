
import React from 'react'
import appbrand from '@/public/appbrand.png';
import Image from 'next/image'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import playstore from '@/public/playstore.svg';


const Brandapp = () => {
  return (
    <div className='w-[80vw] flex justify-center item center'>
      <div className="flex justify-evenly items-center mt-12 border-4 ">
        <div className="flex flex-col">
          <div className="">
          <h1 className='text-4xl font-bold '>Leanr<b className='text-orange-600'>O</b>phere.in</h1>
          </div>
          <div className="">
          <h1 className='text-4xl font-semibold uppercase pt-6'>download the app now</h1>
          </div>
        
          <div className="flex justify-around pt-10 flex-start">
            
          <div className='flex item-center justify-center bg-black p-3 rounded-xl text-white'>
            <div>
            <Image src={playstore} height={20} width={20} alt='playstore' />
            </div>
             <div  className="flex flex-col text-center flex-start">
             <p className='text-xs'>Get it on </p>
             <p>Google Play</p>
               </div>
            </div>
         
          <div className='flex item-center justify-center bg-black p-3 rounded-xl text-white'>
            <div>
            <FaApple className='text-2xl' />
            </div>
             <div  className="flex flex-col text-center flext-start">
             <p className='text-xs  '>Download on the </p>
               <p >App Store</p>
               </div>
            </div>
        
          
          </div>
        </div>
        
        <div className="item-center">
            <Image src={appbrand} height={300} width={300} alt="appimg" />
        </div>
      </div>
    </div>
  )
}

export default Brandapp
