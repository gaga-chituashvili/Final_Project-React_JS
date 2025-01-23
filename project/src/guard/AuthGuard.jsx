import React from 'react'
import { UseAppContext } from '../context/AppContextProvider'
import { authAction } from '../constant/authAction'
import { Link } from 'react-router-dom'
import "../reset.css"


const AuthGuard = ({children}) => {
    const {state}=UseAppContext()
  return (
   
    <section className="w-full flex justify-center py-[250px] 
bg-[url('/src/guard/images/image11.png')] bg-no-repeat bg-cover bg-left">
      {state.isAuthenticated?(children):(
        <section className='w-[400px] flex flex-col items-center gap-y-[40px] p-[40px] border border-solid border-black rounded-[20px] bg-slate-700'>
            <h5 className='text-[20px] text-white'>You Are Not Authenticated</h5>
            <h5 className='text-[20px] text-white'>Please Sign IN OR Sign UP</h5>
            <article className='flex gap-x-[40px]'>
            <button>
            <Link className='text-[20px] hover:bg-red-500 px-[10px] py-[10px] rounded-[10px] text-white' to={authAction.signIn}>Sign IN</Link>
            </button>
            <button>
            <Link className='text-[20px] hover:bg-red-500 px-[10px] py-[10px] rounded-[10px] text-white' to={authAction.signUp}>Sign UP</Link>
            </button>
            </article>
        </section>
    )}
    </section>
   
  )
}

export default AuthGuard