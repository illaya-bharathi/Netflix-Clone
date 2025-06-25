import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import movie from '../../assets/movie.jpg'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import TitleCards from '../../components/TitleCard/TitleCards';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={movie} alt="" className='banner-img' />
        <div className="hero-caption">
          <h1 className="caption-img">Money Heist </h1>
          <p>An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain</p>
        <div className="hero-btns">
          <button className='btn'><FaPlay />play</button>
          <button className='btn dark-btn'><IoIosInformationCircleOutline />More Info</button>
        </div>
        <TitleCards />
        </div>
      </div>
      <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
            <TitleCards title = {"Only on Netflix"} category={"popular"}/> 
             <TitleCards title={"Upcoming"} category={"upcoming"}/>
             <TitleCards title={"TOp pics for You"} category={"now_playing"}/>

      </div>
      <Footer />
    </div>
  )
}

export default Home