import dbConnect, { collectionNameObject } from '@/lib/dbConntect';
import { ObjectId } from 'mongodb';
import React from 'react'

export default async function serviceDetailsPage({params}) {
    const p=await params;
    const serviceCollection=dbConnect(collectionNameObject.servicesCollection);
    const data=await serviceCollection.find({_id : new ObjectId(p.id)}).toArray();
  return (
    <div>Service Details Page
        <p>{p.id}</p>
        <p>{JSON.stringify(data)}</p>
    </div>
  )
}
