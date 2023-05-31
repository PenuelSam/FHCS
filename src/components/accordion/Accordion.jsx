/* eslint-disable react/prop-types */
import  { useState } from 'react'
import './accordion.css'

const Accordion = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
    <div>
      <div className="faq">
            <div className="faq-content">
              <div className="faq-question">
                <p>{question}</p>
              </div>
              <div
              className="faq-button"
              onClick={() => setShow((prev) => !prev)}
            >
              {show ? (
                <div className="faq-minus">-</div>
              ) : (
                <div className="faq-plus">+</div>
              )}
            </div>
            </div>
            {show && (
                <div className=" faq-answer font-bold  text-[20px] sm:text-[20px] lg:text-[30px] lg:leading-[1.6]">
                    <p>{answer}</p>
                </div>
                 
                
              )}
          </div>
    </div>
  )
}

export default Accordion
