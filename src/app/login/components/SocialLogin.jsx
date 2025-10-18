import { signIn } from 'next-auth/react';
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

export default  function SocialLogin() {
    const handleSocialLogin=async(provider)=>{
        console.log('logging in with ',provider);
        const result= await signIn(provider,{redirect:false})
        console.log(result)
    }
  return (
    <div className='flex justify-center gap-8'>
        <p onClick={()=>handleSocialLogin('google')} className='bg-slate-200 rounded-full p-3'>
            <FaGoogle></FaGoogle>
        </p>
        <p onClick={()=>handleSocialLogin('github')} className='bg-slate-200 rounded-full p-3'>
            <FaGithub></FaGithub>
        </p>
    </div>
  )
}
