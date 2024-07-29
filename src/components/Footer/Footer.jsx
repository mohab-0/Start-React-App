import React from 'react';

export default function Footer() {
    return <>
        <footer className='main-bg-color'>
            <div className='w-4/5 py-20 grid grid-cols-3 gap-5 m-auto'>
                <div className='text-white'>
                    <h2 className='font-bold text-3xl mb-5'>LOCATION</h2>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className='text-white'>
                    <h2 className='font-bold text-3xl mb-5'>AROUND THE WEB</h2>
                    <div>
                        <span className='p-1 border rounded-full me-3 text-xl'><i class="fa-brands fa-facebook"></i></span>
                        <span className='p-1 border rounded-full me-3 text-xl'><i class="fa-brands fa-twitter"></i></span>
                        <span className='p-1 border rounded-full me-3 text-xl'><i class="fa-brands fa-linkedin-in"></i></span>
                        <span className='p-1 border rounded-full me-3 text-xl'><i class="fa-solid fa-globe"></i></span>
                    </div>
                </div>
                <div className='text-white'>
                    <h2 className='font-bold text-3xl mb-5'>ABOUT FREELANCER</h2>
                    <p className='font-bold'>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                </div>
            </div>
            <div className='secondary-bg-color py-6 text-white'>
                <p>Copyright © Hamza Nouh 2022</p>
            </div>
        </footer>
    </>
}