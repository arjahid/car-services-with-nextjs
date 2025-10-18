import dbConnect, { collectionNameObject } from '@/lib/dbConntect';
import { ObjectId } from 'mongodb';
import Image from 'next/image';
import React from 'react'

export default async function serviceDetailsPage({params}) {
    const p=await params;
    const serviceCollection=dbConnect(collectionNameObject.servicesCollection);
    const data=await serviceCollection.find({_id : new ObjectId(p.id)}).toArray();
    // use the first (and expected) result from the array
    const service = Array.isArray(data) ? data[0] : data;

  return (
    <div className=''>
        <section className='flex justify-center'>
           <figure className='relative'> <Image src="/assets/images/checkout/checkout.png" width={1137} height={300} alt="image" />
           <div className='transparent-layer absolute w-full h-full border-2 border-red-400 top-0'>
              <div className='w-full h-full flex items-center font-bold ps-16'>
                <div><h1 className='text-white'>services</h1></div>
              </div>
           </div>
           </figure>
        </section>
        <section className='flex flex-col items-center gap-4 my-8'>
         <div className='flex flex-col md:flex-row gap-6 items-center'>
          <div className='flex-1'>
             <Image src={service.img} width={800} height={700} alt={service.title || 'service image'} />
        
          </div>
          <div className='flex-1'>
               <h1 className='font-bold'>Tittle :{service?.title}</h1>
               <h1 className='font-bold'>price: $ {service?.price}</h1>
               <button className='bg-orange-400  text-white w-full py-2 px-4 rounded'>Checkout</button>
          </div>
         </div>
          
           
          
        </section>
        
      
    </div>
  )
}
