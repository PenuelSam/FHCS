/* eslint-disable react/jsx-key */
import  { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const NavLinks = [
        {
            id: 1,
            name: 'Home',
            link: 'home',
        },
        {
            id: 2,
            name: 'About',
            link: 'about',
        },
        {
            id: 3,
            name: 'Services',
            link: "services",
        },
        {
            id: 4,
            name: 'Testimonial',
            link: 'testimonial',
        },
        {
            id: 5,
            name: 'Contact',
            link: 'contact',
        },
    ]

    const [navState, setNavState] = useState(false)
    const [open, setOpen] = useState(false)

    const showMenu = () => {
        setOpen(!open)
    }


    const onScroll = () => {
        if(window.scrollY > 30){
            setNavState(true)
        }else{
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll)

        return() => {
            window.removeEventListener('scroll', onScroll)
        }
    },[navState])


  return (
    <div className={!navState ? `absolute bgc2 top-0 pt-[30px] left-0 h-[12vh] lg:h-[15vh] right-0 opacity-100 text-white z-50`: `fixed top-0 left-0 right-0 h-[12vh] flex items-center justify-center opacity-100 z-[200] text-black blur-effect-theme`}>
        <nav className='max-container flex  justify-between items-center'>
            <div className="left">
            <h1 className="font-bold tracking-wide text  text-[20px] sm:text-[15px] z-[300]">FHCS LOGO</h1>
            </div>
            <ul className="list-none flex lg:hidden  uppercase items-center justify-center cursor-pointer">
                {
                    NavLinks.map((nav)=> (
                       <a href={nav.link} target='_parent'><li key={nav.id}  className={`ml-[10px] text-[15px]`}>{nav.name}</li></a> 
                    ))
                }
            </ul>
            <div className='hidden fixed right-0 lg:flex pr-[20px]'>
                {open ? <CloseIcon fontSize='large' className='z-[200] cursor-pointer' onClick={showMenu} /> :<MenuIcon fontSize='large' onClick={showMenu} className='z-[200] cursor-pointer' />} 
                <ul className={open ? `flex flex-col  fixed justify-center items-center inset-0 uppercase cursor-pointer bg-black/70 backdrop-blur-lg text-[20px] w-full h-screen  gap-8` : `hidden`}>
                {
                    NavLinks.map((nav)=> (
                        <li key={nav.id} id={nav.link} className={`text-white`}>{nav.name}</li>
                    ))
                }
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar