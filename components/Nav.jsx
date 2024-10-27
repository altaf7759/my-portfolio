import Link from 'next/link'
import React from 'react'
import Image from "next/image"

function Nav() {
    return (
        <nav className='flex items-center justify-between py-6 px-[10%] border-b border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur fixed z-1000 w-full'>

            <div className='flex gap-14'>
                <Link href='/' className='flex gap-3'>
                    <Image
                        src='/assets/images/logo.svg'
                        width={35}
                        height={35}
                        alt='logo'
                        className='object-contain filter grayscale'
                    />
                    <p className='font-bold text-3xl text-gray-600'>Port<span className='text-green-500'>folio.</span></p>
                </Link>

                <div className='flex items-center'>
                    <ul className='flex text-base gap-10 font-semibold text-gray-600'>
                        <li>
                            <Link href='/my-skills'>
                                My Skills
                            </Link>
                        </li>
                        <li>
                            <Link href='/about-me'>
                                About Me
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact-me'>
                                Contact Me
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <Link href='/download-cv'>
                <button 
                type='button'
                className='bg-green-500 rounded py-2 px-8 text-white'
                >
                    Download CV
                </button>
                </Link>
            </div>
        </nav>
    )
}

export default Nav