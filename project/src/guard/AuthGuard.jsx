import React from 'react'
import { UseAppContext } from '../context/AppContextProvider'
import { authAction } from '../constant/authAction'
import { Link } from 'react-router-dom'


const AuthGuard = ({children}) => {
    const {state}=UseAppContext()
  return (
    <section className="flex justify-center py-[200px]">
      {state.isAuthenticated?(children):(
        <div className='w-[400px] flex flex-col items-center gap-y-[30px] p-[40px] border border-solid border-black rounded-[20px]'>
            <h5>You Are Not Authenticated</h5>
            <h5>Please Sign IN OR Sign UP</h5>
            <article className='flex gap-x-[40px]'>
            <button>
            <Link to={authAction.signIn}>Sign IN</Link>
            </button>
            <button>
            <Link to={authAction.signUp}>Sign UP</Link>
            </button>
            </article>
        </div>
    )}
    </section>
  )
}

export default AuthGuard