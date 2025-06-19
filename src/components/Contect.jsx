import React, { useState } from 'react'
import StarsCanvas from './Stars'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

const Contect = () => {
  // service id = service_hwp1fcm
  // template_4jlewsx
  // CT5qXZyKxqrL5l4uZ
  const successToast = () => toast.success(" Email send successfuly will get back to you soon ", { hideProgressBar: false, position: "top-center" ,autoClose : 4000 })
  const eroorToast = () => toast.error(" Something went wrong ", { hideProgressBar: false, position: "top-center" ,autoClose : 3000})
  const [form, setForm] = useState({ name: "", message: "", email: "" })
  const [loading, setLoading] = useState(false)
  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value

    setForm({ ...form, [name]: value })

  }
  function handleSubmit(e) {

    e.preventDefault()
    setLoading(true)
   
    emailjs.send("service_hwp1fcm", "template_vxsztlm",
      {
        from_name: form.name,
        to_name: "Md Arif Ansari",
        from_email: form.email,
        to_email: "rcduaru2718@gmail.com",
        message: form.message
      },
      "CT5qXZyKxqrL5l4uZ"
    ).then(() => {
      setLoading(false)
      successToast()
      setForm({ name: "", message: "", email: "" })

    }, (error) => {
      console.log(error)
      setLoading(false)
      eroorToast()
      setForm({ name: "", message: "", email: "" })
    })



  }

  return (
    <div className='relative contect'>
      <div className='md:w-[50%] w-[80%]  m-auto px-6 z-10 opacity-100 bg-[#0a0b2c] rounded-2xl p-3'>
        <div className='mt-[2px]'>
          GET IN TOUCH
        </div>
        <div className='text-5xl font-bold h-[90px]'>
          Contact.
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            Your Name
          </div>
          <input required value={form.name} onChange={handleChange} className='pl-2 w-[90%] mt-2 py-1 bg-[#160f3a] rounded-lg text-gray-200 outline-0' type="text" placeholder="what's your name? " name='name' id="name" />
          <br /><br />
          <div>
            Your Email
          </div>
          <input required value={form.email} onChange={handleChange} className='pl-2 w-[90%] mt-2 py-1 bg-[#160f3a] rounded-lg text-gray-200 outline-0' type="email" placeholder='Email address' name='email' id='email' />
          <br /><br />
          <div>
            Your Message
          </div>
          <textarea required value={form.message} onChange={handleChange} className='pl-2 w-[90%]  bg-[#160f3a] s text-gray-200  borde  rounded-lg my-3 h-[170px] outline-0 ' type="text" name="message" id="message" placeholder='what dou you wanted to say ' /><br />
          <button className=' p-2  font-bold self-end' type="submit" >{ loading ? 'sending...' : 'send'}</button>
        </form>

        <StarsCanvas z={-2} />

      </div>

    </div>
  )
}

export default Contect