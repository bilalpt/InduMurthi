import React from 'react'
import Image from 'next/image'
// import profilea from '../assets/profilea.jpeg'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-serif'>Introduction</h4>
            <h2 className='text-center text-5xl font-serif'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row-reverse items-center gap-20 my-20'>
                {/* Image */}
                <div className='flex-shrink-0 w-[320px] h-[400px] rounded-3xl overflow-hidden'>
                    {/* <Image
                        src={profilea}
                        alt='user'
                        className='w-full h-full object-cover rounded-2xl'
                    /> */}
                </div>

                {/* Content */}
                <div className='flex'>
                    <p className='text-justify text-base leading-relaxed'>
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                        Loram 5 Tablet is a combination medicine used to treat hypertension (high blood pressure).
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
