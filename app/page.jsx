import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Feed from '@/components/Feed'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';


function Home() {
  return (
    <section className='px-[10%] pt-[130px]'>

        <div className='flex justify-around items-center mt-5'>

          <div className='pl-5'>

            <p className='border-b inline p-2 text-green-500'>Welcome</p>

            <h1 className='text-5xl font-bold'>I am a <br /> <span className='text-green-500 border-b-2'>Full Stack</span> Web <br /> Developer.</h1>

            <p className='mt-8'>I'm Ataf, Full stack web developer skilled in React, Node.js, and MongoDB. I create seamless user experiences from front to back. Let's build something great.</p>

            <Link href='/contacts'>
              <button type='button' className='bg-green-500 py-2 px-5 text-white rounded mt-5'>
                Contact Me
              </button>
            </Link>

            <Link href='/projects'>
              <button type='button' className='py-2 px-5 text-green-600 ml-5 cursor-pointer'>
                Projects 
                <ArrowOutwardIcon 
                className='text-sm ml-2 text-green-500 cursor-pointer'
                />
              </button>
            </Link>
            <div className='text-gray-500 flex mt-6'>
              <p className='mr-5'>Follow me   </p>
              <Link href='/'>
                <LinkedInIcon 
                className='icon'
                />
              </Link>
              <Link href='/'>
                <FacebookIcon 
                className='icon'
                />
              </Link>
              <Link href='/'>
                <InstagramIcon 
                className='icon'
                />
              </Link>
              <Link href='/'>
                <XIcon 
                className='icon'
                />
              </Link>
            </div>
          </div>
          <div>
            <Image 
            src='/assets/images/mainBg.svg'
            width={1500}
            height={1500}
            alt='bg'
            className='select-none'
            />
          </div>
        </div>
        <div>
          <Feed />
        </div>
    </section>
  )
}

export default Home