
import { useDispatch } from 'react-redux'
import { setOpenModal } from '../../app/FormSlice'

const Contact = () => {
    const dispatch = useDispatch()

    const onOpenModal = () => {
        dispatch(setOpenModal({
            modalState : true
        }))
    }

  return (
    <div className='w-full bgc2 ' id='/contact'>
        <div className='max-container lg:w-full flex justify-between md:flex-col  py-[30px]'>
            <h1  className='text-white font-bold text-[1.5rem]  ml-0 lg:ml-[15px] md:text-[1.5rem] xsm:text-[10rem] '>For more enquiries about <br className='md:hidden' />First Haven Care Solutions</h1>
            <div>
            <button onClick={onOpenModal} className='button-theme  font-bold border-none outline-none  mr-0 lg:mr-[15px] md:ml-5 '>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default Contact