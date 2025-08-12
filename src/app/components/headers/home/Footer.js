import React from 'react'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>Arun das</h1>

                {/* Email below name, properly centered */}
                <div className='mx-auto mt-2 w-max flex items-center gap-2'>
                    {/* Replace this with an icon if needed */}
                    <span className='text-sm'>email: arundas@example.com</span>
                </div>
            </div>

            {/* Bottom section with copyright and links */}
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
