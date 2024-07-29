import React from 'react';

export default function About() {
    return <>
        <section className='grn-color pb-20 pt-48'>
            {/* ===== About Header ===== */}
            <div>
                <h1 className='text-white font-bold text-5xl tracking-wider'>ABOUT</h1>
                <i class="fa-solid fa-star  fa-2xl my-10 text-white"></i>
            </div>
            <div className='flex align-middle justify-center my-10 gap-10'>
                <p className='w-1/4 text-xl text-white'>
                    Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </p>
                <p className='w-1/4 text-xl text-white'>
                    You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                </p>
            </div>
        </section>
    </>
}