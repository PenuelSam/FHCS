
import { useDispatch, useSelector } from 'react-redux'
import { selectModalState, setCloseModal } from '../../app/FormSlice'
import Forms from './Forms'

const Form = () => {
    const ifModal = useSelector(selectModalState)

    const dispatch = useDispatch()

    const onCloseModal = () => {
        dispatch(setCloseModal({
            modalState: false
        }))
    }

  return (
    <div className={`fixed opacity-100 z-[200] top-0 left-0 right-0 w-full h-screen blur-effect-theme ${ifModal ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-8 '}`}>
    <div  className='container  h-full flex justify-center items-center'>
    <Forms onCloseModal={onCloseModal} />
    </div>
    </div>
  )
}

export default Form