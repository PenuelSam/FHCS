
const Footer = () => {
  return (
    <div className='w-full bg-black text-white'>
        <div className='max-container lg:pt-5'>
        <div className='flex justify-between md:flex-col md:items-start  items-center'>
           <h1>FHCS LOGO</h1>
        <div className='mt-[1em]'>
            <h1 className='text-[20px] pt-[20px]'>Our Company</h1>
            <div className='flex flex-col text-slate-200 mt-[15px]'>
                <span className='pb-[10px]'>About</span>
                <span className='pb-[10px]'>Services</span>
                <span className='pb-[10px]'>Testimonial</span>
            </div>
        </div>
        <div className='mt-[1em] md:mt-0'>
            <h1 className='text-[20px] pt-[20px]'>Support</h1>
            <div className='flex flex-col text-slate-200 mt-[15px]'>
                <span className='pb-[10px]'>Help Center</span>
                <span className='pb-[10px]'>Privacy Policy</span>
                <span className='pb-[10px]'>Terms & Conditions</span>
            </div>
        </div>
        </div>
        <div className='w-full h-[1px] bg-slate-200'></div>
        <div className='py-[20px] flex justify-center items-center'>
            <span>&copy; FHCS.All rights reserved.</span>
        </div>
        </div>
    </div>
  )
}

export default Footer