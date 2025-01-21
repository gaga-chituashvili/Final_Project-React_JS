import React from 'react'

const ContactForm = () => {
  return (
    <form className='w-[400px] flex flex-col gap-y-[20px] border border-solid border-black p-[40px] rounded-[15px]'>
      <input placeholder='Name' name='Name' className='w-full h-[30px] border border-solid border-black rounded-[10px]'/>
      <input placeholder='Email' name='Email' className='w-full h-[30px] border border-solid border-black rounded-[10px]'/>
      <textarea placeholder='Message' name='texarea' className='w-full h-[80px] border border-solid border-black resize-none rounded-[10px]'/>
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default ContactForm