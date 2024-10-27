import Link from "next/link"
import Image from "next/image"

import Contacts from "./Contacts"

import PhonelinkIcon from '@mui/icons-material/Phonelink'
import MemoryIcon from '@mui/icons-material/Memory'
import SyncProblemIcon from '@mui/icons-material/SyncProblem'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'
import StarIcon from '@mui/icons-material/Star'
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Feed() {
  return (
    <section className="">

      <div className='flex w-full justify-evenly mt-20'>

        <div className='text-center'>
          <p className='text-green-500 text-5xl font-bold'>80+</p>
          <p className='mt-3 text-lg text-gray-700'>Satisfied Clients</p>
        </div>

        <div className='border-r border-green-500' />

        <div className='text-center'>
          <p className='text-green-500 text-5xl font-bold'>200+</p>
          <p className='mt-3 text-lg text-gray-700'>Projects Completed</p>
        </div>

        <div className='border-r border-green-500' />

        <div className='text-center'>
          <p className='text-green-500 text-5xl font-bold'>99+</p>
          <p className='mt-3 text-lg text-gray-700'>Reviews Given</p>
        </div>

      </div>

      <div className="flex py-20 mt-16 items-center">

        <div>
          <h3 className='text-white bg-green-500 rounded-r-full px-3 mb-5 py-1 inline-block'>My Skills</h3>
          <h2 className="text-5xl font-bold">Why hire me for your <br /> next <span className="text-green-500">project?</span></h2>
          <p className="text-gray-600 mt-5 mb-10">Hire me for my full stack expertise and my ability to deliver seamless, <br /> efficient, and scalable web solutions. Your vision, my skills a <br /> perfect match!</p>
          <Link
            href=''
            className="bg-green-500 px-5 py-2 rounded text-white"
          >
            Hire Me
          </Link>
        </div>

        <div className="ml-64">

          <div>
            <PhonelinkIcon className="text-green-500" />
            <h2 className="text-gray-600 font-bold">Full Stack Expert</h2>
            <p className="text-gray-600">Frontend to backend, seamless <br /> and integrated.</p>
          </div>

          <div className="ml-[100%] w-full">
            <MemoryIcon className="text-green-500" />
            <h2 className="text-gray-600 font-bold">Cutting-Edge Tech</h2>
            <p className="text-gray-600">Mastery in React, Node.js, <br /> MongoDB.</p>
          </div>

          <div>
            <SyncProblemIcon className="text-green-500" />
            <h2 className="text-gray-600 font-bold">Problem-Solver</h2>
            <p className="text-gray-600">Ahead of trends, tackling <br /> challenges head-on.</p>
          </div>

        </div>
      </div>

      <div className="flex gap-20 mt-20 mb-20">

        <div className="w-auto mt-10">
          <h3 className="bg-green-500 inline-block text-white rounded-r-full px-3 py-1">Portfolio</h3>
          <h2 className="text-4xl font-bold mt-4">My creative works <br /> latest <span className="text-green-500">projects.</span></h2>
          <p className="mt-3 text-gray-600 mb-10">I've selected and mentioned here some of my latest projects to share with you.</p>
          <Link
            href=''
            className="py-2 px-4 rounded bg-green-500 text-white"
          >
            View More
          </Link>
        </div>

        <div className="flex gap-3 overflow-hidden w-full relative -z-10">
          <Image
            src='/assets/images/project1.svg'
            width={700}
            height={700}
            alt="project"
            className="rounded relative"
          />
          <div className="absolute left-2 bottom-2">
            <div className="inline-block rounded-full mr-2 cursor-pointer bg-white text-green-500 p-1">
              <ArrowLeftIcon/>
            </div>
            <div className="inline-block rounded-full cursor-pointer bg-white text-green-500 p-1">
              <ArrowRightIcon/>
            </div>
          </div>

          <Image
            src='/assets/images/project1.svg'
            width={680}
            height={680}
            alt="project"
            className="rounded"
          />
        </div>

      </div>

      <div className="mt-32 w-full">
        
        <div className="flex w-full justify-between">

          <div>
            <h5 className="py-1 px-3 bg-green-500 rounded-r-full inline-block text-white">Reviews</h5>
            <h3 className="mt-3 text-4xl font-bold">What customers <br /> say <span className="text-green-500">about me?</span></h3>
          </div>

          <div className="relative">
            <div className="flex absolute right-12 bottom-3 text-green-500">
              <div className="mr-3">
                <WestIcon />
              </div>
              <div>
                <EastIcon />
              </div>
            </div>
          </div>

        </div>

        <div className="flex gap-10 p-5 mt-5 relative -z-10">

          <div className="border rounded p-6 -z-0 border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-full">
            <div className="text-green-500 mb-2">
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarHalfIcon className="w-4 h-4"/>
            </div>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quae maiores? Accusantium voluptatum quidem quo atque sapiente itaque doloribus eveniet?</p>
            <div className="flex gap-4 text-gray-600 mt-5">
              <Image 
              src='/assets/images/logo.svg'
              width={30}
              height={30}
              alt="user"
              className="rounded-full"
              />
              <div>
                <p className="font-semibold leading-none text-sm">Altaf Raja</p>
                <p className="text-gray-500 text-xs">Web Developer</p>
              </div>
            </div>
          </div>

          <div className="border rounded p-6 border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-full">
            <div className="text-green-500 mb-2">
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarHalfIcon className="w-4 h-4"/>
            </div>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quae maiores? Accusantium voluptatum quidem quo atque sapiente itaque doloribus eveniet?</p>
            <div className="flex gap-4 text-gray-600 mt-5">
              <Image 
              src='/assets/images/logo.svg'
              width={30}
              height={30}
              alt="user"
              className="rounded-full"
              />
              <div>
                <p className="font-semibold leading-none text-sm">Altaf Raja</p>
                <p className="text-gray-500 text-xs">Web Developer</p>
              </div>
            </div>
          </div>

          <div className="border rounded p-6 border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur w-full">
            <div className="text-green-500 mb-2">
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarIcon className="w-4 h-4"/>
              <StarHalfIcon className="w-4 h-4"/>
            </div>
            <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, quae maiores? Accusantium voluptatum quidem quo atque sapiente itaque doloribus eveniet?</p>
            <div className="flex gap-4 text-gray-600 mt-5">
              <Image 
              src='/assets/images/logo.svg'
              width={30}
              height={30}
              alt="user"
              className="rounded-full"
              />
              <div>
                <p className="font-semibold leading-none text-sm">Altaf Raja</p>
                <p className="text-gray-500 text-xs">Web Developer</p>
              </div>
            </div>
          </div>

        </div>

      </div>

      <div>
        <Contacts />
      </div>


    </section>
  )
}

export default Feed