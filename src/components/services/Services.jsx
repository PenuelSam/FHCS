
import "./services.css";
import Accordion from "../accordion/Accordion";
import { questions } from "../accordion/data";
import { useState } from "react";

const Services = () => {
    const [data] = useState(questions)
  
  return (
    <div className="max-container lg:w-full serve">
      <h1 className="services-title">Services</h1>
      <div className="services">
        {data.map((item) => 
        <Accordion key={item.id} question={item.question} answer={item.answer}/>
        )}     
       
      </div>
    </div>
  );
};

export default Services;
