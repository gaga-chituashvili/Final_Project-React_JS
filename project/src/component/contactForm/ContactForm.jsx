import React from 'react'

const ContactForm = () => {
  return (
    <form className='w-[400px] flex flex-col gap-y-[20px] border border-solid border-black p-[40px] rounded-[15px] bg-slate-600'>
      <input placeholder='Name' name='Name' className='w-full h-[30px] border border-solid border-black rounded-[10px] bg-slate-200'/>
      <input placeholder='Email' name='Email' className='w-full h-[30px] border border-solid border-black rounded-[10px] bg-slate-200'/>
      <textarea placeholder='Message' name='texarea' className='w-full h-[80px] border border-solid border-black resize-none rounded-[10px] bg-slate-200'/>
      <button className='hover:bg-red-500 px-[10px] py-[10px] rounded-2xl' type='submit'>SUBMIT</button>
    </form>
  )
}

export default ContactForm