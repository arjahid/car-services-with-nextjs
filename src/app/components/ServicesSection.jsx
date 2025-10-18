import dbConnect, { collectionNameObject } from '@/lib/dbConntect'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

export default async function ServicesSection() {
   const servicesCollection=dbConnect(collectionNameObject.servicesCollection);
   const data=await servicesCollection.find({}).toArray();

  return (
    <div className='grid grid-cols-12 gap-6'>
        {data.map((item)=>{
            return (
                <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4 p-2'>
                    <div className='bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden'>
                        <Image
                            src={item.img}
                            alt={item.title || 'service image'}
                            width={314}
                            height={108}
                            className='w-full h-48 object-cover'
                        />
                        <div className='p-4'>
                            <h2 className='text-2xl font-bold my-2'>{item.title}</h2>
                            <div className='flex items-center justify-between'>
                                <span className='text-orange-400 font-medium'>Price : {item.price}</span>
                                <Link href={`/services/${item._id}`} className='text-orange-500 inline-flex items-center justify-center p-2 rounded-full hover:bg-orange-50'>
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
