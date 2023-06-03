/* eslint-disable react/prop-types */
import Close from '@mui/icons-material/Close'
import Customer from '../customer/Customer'


const Forms = ({onCloseModal}) => {
  return (
    <div className='relative'>
        <Close onClick={onCloseModal} fontSize='large' className='cursor-pointer top-10  absolute text-white right-5'/>
        <Customer />
    </div>
  )
}

export default Forms