import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaWhatsapp, FaMapMarkerAlt, } from 'react-icons/fa';
import { BsSendXFill } from 'react-icons/bs';

const Contacts = () => {
    const form = useRef();
    const contact_info = [
        { logo: <FaEnvelope />, text: 'sarkerbadhon01@gmail.com' },
        { logo: <FaWhatsapp />, text: '+880 1874081396' },
        { logo: <FaMapMarkerAlt />, text: 'Dhaka, Bangladesh' }
    ];

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_255j94c',
            'template_l1rksed',
            form.current,
            'VzNYMcCGogxW1OgSG')
            .then((result) => {
                console.log(result.text);
                resetForm();
            }, (error) => {
                console.log(error.text);
            });
    };

    const resetForm = () => {
        if (form.current) {
            form.current.reset();
        }
    };

    return (
        <section className="py-10 px-3 text-white bg-slate-900" id="contact">
            <div className='bg-black bg-opacity-40 rounded-lg text-white h-[360px] md:h-[380px]  '>

                {/* -------------------START-Plans-------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2  md:pl-36 justify-center items-center gap-4 px-3 ">
                    <div className="text-center mx-4 ">
                        <h1 className='text-xl md:text-4xl lg:text-5xl font-bold text-center py-6 md:py-10'>
                            Contact with Us
                        </h1>
                        <p className='text-sm md:text-base lg:text-lg text-center'>
                            To make a solid investment, you have to know where you are investing. Find a plan which is best for you./                         </p>

                    </div>
                    <div>
                        <img className='h-72 mt-3' src="https://i.ibb.co/1Gts30b/choose-img.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="text-center mt-10">

                {/* <h3 className='text-4xl font-bold'> Contact
          <span className='text-cyan-600 '>Me</span>
        </h3>
        <p className='text-gray-400 mt-3 text-2xl'>Get in touch</p> */}

                <div className=' flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 py-10 md:p-6 p-2 rounded-lg mx-auto'>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col flex-1 gap-5'>
                        <input type='text' name='from_name' className="py-3 px-3 text-black bg-gray-300" placeholder='Your Name' />
                        <input type="email" name="from_email" className="py-3 px-3 text-black bg-gray-300" placeholder="Your Email Address" />
                        <textarea name='message'
                            className='text-black py-8 px-3 bg-gray-300' placeholder='Your Message' rows={8}></textarea>
                        <button style={{ backgroundImage: " linear-gradient(to right, #de5c70 0%, #e98c5d 51%, #de5c70 100%)" }} className='btn btn-lg w-fit p-3 text-white'>Send Message <BsSendXFill /> </button>
                    </form>
                    <div className="flex flex-col gap-7">
                        {
                            contact_info.map((contact, i) => (
                                <div key={i} className="flex gap-4 w-fit items-center">
                                    <div className="min-w-[3.5rem] min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                                        {contact.logo}

                                    </div>
                                    <p className="text-[20px] ">{contact.text}</p>

                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contacts;