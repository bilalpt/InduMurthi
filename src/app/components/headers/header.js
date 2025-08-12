"use client"
import React from 'react'
import Image from 'next/image'
import { useRef } from 'react'

const Header = ({ isDarkMode, setIsDarkMode }) => {

    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    return (
        <>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 '>
                <a href='#top' className='w-28 cursor-pointer mr-14 font-bold'>Indu Murthi

                    {/* <Image src='' className='w-28 cursor-pointer mr-14' /> */}
                </a>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-[#f0fdff] shadow-sm bg-opacity-50'>
                    <li><a href='#top' className='font-serif'>Home</a></li>
                    <li><a href='#about' className='font-serif'>About me</a></li>
                    <li><a href='#experience' className='font-serif'>Experience</a></li>

                    <li><a href='#contact' className='font-serif'>Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4'>
                    {/* <button onClick={()=>setIsDarkMode(prev=>!prev)} className='cursor-pointer'>dark</button> */}
                    <a href='#contact' className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-serif'>Contact  </a>
                    <button className='block md:hidden ml-3' onClick={openMenu}>menu</button>
                </div>

                {/* mobile menu  */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div onClick={closeMenu} className='absolute right-6 top-6 '><h1 className='w-5 cursor-pointer'>close</h1></div>
                    <li><a onClick={closeMenu} href='#top' className='font-serif'>Home</a></li>
                    <li><a onClick={closeMenu} href='#about' className='font-serif'>About me</a></li>
                    <li><a onClick={closeMenu} href='#contact' className='font-serif'>Contact me</a></li>
                </ul>


            </nav>
        </>
    )
}

export default Header
