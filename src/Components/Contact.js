import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 p-4 py-20'>
      <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e] tracking-widest'>Contact</h1>
      <form action="https://getform.io/f/165df0f1-952c-4571-b21a-58197e823b61" method='POST' encType='multipart/form-data'>
        <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-200' type='text' name='name'/>
          </div>
          <div className='flex flex-col'>
            <label className='uppercase text-sm py-2'>Phone Number</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-200' type='text' name='phone'></input>
          </div>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-200' type='email' name='name'/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-grey-200' type='text' name='subject'/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-sm py-2'>Message</label>
          <textarea className='border-2 rounded-lg p-3 border-grey-200' rows='10' name='message'/>
        </div>
        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full rounded-lg p-4'>Send Message</button>
      </form>
    </div>
  )
}

export default Contact
