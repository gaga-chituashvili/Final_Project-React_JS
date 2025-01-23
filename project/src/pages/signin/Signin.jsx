import React from 'react'
import SignForm from '../../component/signForm/SignForm'

const Signin = () => {
  return (
    <section className="w-full flex  justify-center py-[200px] 
bg-[url('/src/pages/signin/images/images13.png')] bg-no-repeat bg-cover bg-left">
      <SignForm/>
    </section>
  )
}

export default Signin