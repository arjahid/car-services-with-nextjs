"use server"
import bcrypt from "bcrypt"

import dbConnect, { collectionNameObject } from "@/lib/dbConntect"

export const registerUser=async(userData)=>{
    
    const userCollection=dbConnect(collectionNameObject.userCollection);
    // validation
    const {email,password}=userData;
    if(!email || !password){
        throw new Error('Email and password are required');
    }
    const user=await userCollection.findOne({email:userData.email});
    if(user){
        throw new Error('User already exists with this email');
    }
    //hash password
    const hashedPassword=await bcrypt.hash(password,10);
    userData.password=hashedPassword;
    const result=await userCollection.insertOne(userData);
    const {acknowledged,insertedId}=result;
    return {acknowledged,insertedId};
}