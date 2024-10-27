import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import React from 'react'

function Footer() {
  return (
    <footer className='mt-16 flex items-center justify-between py-8 px-[10%] border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-full'>
        <div>
            <p className='text-gray-500'>@ All Rights Reserved</p>
        </div>
        <div>
            <p className='text-gray-500'>Developed by Altaf Raja</p>
        </div>
        <div className='text-gray-500 flex'>
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
    </footer>
  )
}

export default Footer