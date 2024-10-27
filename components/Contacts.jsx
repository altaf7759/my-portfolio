import CallIcon from '@mui/icons-material/Call'
import MailIcon from '@mui/icons-material/Mail'
import LocationOnIcon from '@mui/icons-material/LocationOn'

function Contacts() {
  return (
    <section>

        <div className='mt-24 text-center'>
            <h3 className='text-green-500'>Contacts</h3>
            <h5 className='text-4xl font-bold'>Let's discuss your <span className='text-green-500'>project</span></h5>
            <p className='text-gray-600 mt-5'>Let's make something new, different and more meaningful or make <br /> things more visual or conceptual.</p>
        </div>

        <div className='flex mt-10'>

            <div className='flex-col p-3 mt-5'>

                <div className='flex items-center border-b-2 p-3'>
                    <div className='mr-3 flex items-center justify-center p-2'>
                        <CallIcon 
                        className='text-green-500'
                        />
                    </div>
                    <div className='flex-col'>
                        <p className='text-gray-400 text-xs'>Call me</p>
                        <p className='text-gray-600 text-sm'>+91 7759892024</p>
                    </div>
                </div>

                <div className='flex items-center border-b-2 p-3'>
                    <div className='mr-3 flex items-center justify-center p-2'>
                        <MailIcon 
                        className='text-green-500'
                        />
                    </div>
                    <div className='flex-col'>
                        <p className='text-gray-400 text-xs'>Email</p>
                        <p className='text-gray-600 text-sm'>altaf.1040216@gmail.com</p>
                    </div>
                </div>

                <div className='flex items-center border-b-2 p-3'>
                    <div className='mr-3 flex items-center justify-center p-2'>
                        <LocationOnIcon 
                        className='text-green-500'
                        />
                    </div>
                    <div className='flex-col'>
                        <p className='text-gray-400 text-xs'>Location</p>
                        <p className='text-gray-600 text-sm'>Greater Noida, Sector 17A</p>
                    </div>
                </div>

            </div>

            <div className='w-full flex items-center justify-center p-10'>
               <form action="#" className='w-full'>
                    <div className='flex gap-10'>
                        <input className='p-3 border-2 w-full rounded border-gray-200' type="text" placeholder='Full Name' />
                        <input className='p-3 border-2 w-full rounded border-gray-200' type="text" placeholder='Email' />
                    </div>
                    <div className='flex gap-10 mt-5'>
                        <input className='p-3 border-2 w-full rounded border-gray-200' type="number" placeholder='Phone Number' />
                        <input className='p-3 border-2 w-full rounded border-gray-200' type="number" placeholder='Budget' />
                    </div>
                    <div className='mt-5'>
                        <textarea className='p-3 w-full border-2 rounded border-gray-200' rows={5} placeholder='Enter your messege'></textarea>
                    </div>
                    <div className='flex float-right mt-10'>
                        <button className='px-7 py-3 bg-green-500 rounded text-white' type='submit'>Send Messege</button>
                    </div>
                </form> 
            </div>

        </div>

    </section>
  )
}

export default Contacts