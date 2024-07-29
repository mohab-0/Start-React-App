import React from 'react';

export default function Contact() {
    return <>
        <section className='pb-20 pt-48'>
            <div className=''>
                <h1 className='header-color font-bold text-5xl tracking-wider'>CONTACT ME</h1>
                <i class="fa-solid fa-star  fa-2xl my-10 header-color"></i>
            </div>
            <form action="">
                <div className='w-3/5 m-auto'>
                    <div>
                        <input type="text" placeholder='Name' className='border-0 w-full p-4 my-4 placeholder:text-2xl placeholder:text-gray-500' />
                    </div>
                    <div>
                        <input type="email" placeholder='Email Address' className='border-0 w-full p-4 my-4 placeholder:text-2xl placeholder:text-gray-500' />
                    </div>
                    <div>
                        <input type="tel" placeholder='Phone Number' className='border-none w-full p-4 my-4 placeholder:text-2xl placeholder:text-gray-500' />
                    </div>
                    <div>
                        <textarea className=' w-full p-4 my-4 placeholder:text-2xl placeholder:text-gray-500' placeholder='Message'></textarea>
                    </div>
                    <div className=" justify-start">
                        <input type="submit" className="py-4 px-10 grn-color text-white text-xl hover:bg-white border-2 transition-all hover:text-emerald-600 justify-start flex  rounded-xl" value="send" />
                    </div>
                </div>

            </form>
        </section>
    </>
}