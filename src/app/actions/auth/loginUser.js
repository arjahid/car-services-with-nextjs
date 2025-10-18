'use server'
import dbConnect, { collectionNameObject } from '@/lib/dbConntect';
import React from 'react'
import bcrypt from 'bcrypt';

export default async function loginUser(formData) {
  
    const {email,password}=formData;
    const userCollection=dbConnect(collectionNameObject.userCollection);
    const user =await userCollection.findOne({email:email});
    if(!user) return null;
    const isPasswordMatch=await bcrypt.compare(password,user.password);
    if(!isPasswordMatch) return null;
    const safeUser={
        _id:user._id,
        name:user.name,
        email:user.email,
    }
    return safeUser;
}
