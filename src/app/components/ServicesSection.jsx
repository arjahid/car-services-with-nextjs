import dbConnect, { collectionNameObject } from '@/lib/dbConntect'
import Image from 'next/image'
import React from 'react'

export default async function ServicesSection() {
   const servicesCollection=dbConnect(collectionNameObject.servicesCollection);;
   const data=await servicesCollection.find({}).toArray();

  return (
    <div className='grid grid-cols-12'>
        {data.map((item)=>{
            return (
                <div key={item._id} className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <Image src={item.img} alt='image' width={314} height={208}></Image>
                    <h2 className='text-2xl font-bold my-4'>{item.title}</h2>
                    <h2 className='text-orange-400'>Price : {item.price}</h2>
                </div>
            )
        })}
    </div>
  )
}
