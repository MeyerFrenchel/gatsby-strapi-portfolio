import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {AiFillHtml5} from 'react-icons/ai';


const Services = () => {
  return <section className="section bg-grey">
    <Title title="skills"/>
    <div className="section-center services-center">
      {services.map((service)=>{
        const {id,icon,title,text} = service

        return <article key={id} className="service">
        {icon}
        <h4>{title}</h4>
        <div className='underline'></div>
        <p className='service-text'>{text}</p>
        </article>
      })}
    </div>
    <div>
    <AiFillHtml5 />
    </div>
  </section>
}

export default Services
