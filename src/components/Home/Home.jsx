import React, {useEffect} from 'react'
import './home.css'
import video from '../../Assets/video.mp4';
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { TfiFacebook } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaTripadvisor } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Home = () => {
useEffect(()=>{
 Aos.init({duration: 2000})
},[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>

        </div>
        <div  data-aos="fade-up" className="cardDiv grid">

          <div className="destinationInput">
            <lable htmlfor="city">Search your destination</lable>
            <div className="input flex">
              <input type="text" placeholder='Enter your Destination....' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <lable htmlfor="date">Select your Date </lable>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlfor="price">Max price:</label>
              <h3 className='total'>₹20,000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="10000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <HiFilter className='icon' />
            <span>MORE FLITERS</span>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <TfiFacebook className='icon' />

            <FaInstagram className='icon' />

            <FaTripadvisor className='icon' />
          </div>

          <div className="leftIcons">
            <FaListUl  className='icon' />
            <TbAppsFilled   className='icon' />
          </div>

        </div>
      </div>

    </section>
  )
}

export default Home