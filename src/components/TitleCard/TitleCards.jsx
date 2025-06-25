import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import Card from '../../assets/cards/Cards'
import { Link } from 'react-router-dom'

const TitleCards = ({title,category}) => {
const [apiData,setApiData] = useState([])
  const cardsRef = useRef();
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTMyNDU5NTM3NzFhNmY2YzQ2MTkwM2JiODMwZWU5OSIsIm5iZiI6MTczNzA1NTA3NS4wMDQsInN1YiI6IjY3ODk1YjYyNTVlNDliZWQ1ZTk3OTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hu6U2jEzcIqPcrS_kUCNaK33oZXMRHObweA2JX_KV3U'
  }
};



  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY ;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
    const ref = cardsRef.current;
    ref.addEventListener('wheel', handleWheel);

    // Cleanup to avoid memory leaks
    return () => {
      ref.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div className='titlecards'>
      <h1>{title ? title:"Popular On Netflix"}</h1>
      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card, index) => {
            return <Link to ={`/player/${card.id}`} className="card" key={index}>
              <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt={card.name} />
              <p>{card.original_title}</p>
            </Link>
          })
        }
      </div>
    </div>
  )
}

export default TitleCards;
