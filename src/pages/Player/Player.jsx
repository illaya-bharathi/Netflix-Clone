import React, { useEffect, useState } from 'react'
import './Player.css'
import { useNavigate, useParams } from 'react-router-dom'
import { FaArrowCircleLeft } from "react-icons/fa";
const player = () => {
   const {id} = useParams();
   const navigate = useNavigate()

const[apiData,setApiData] = useState({
  name:'',
  key:'',
  published_at:'',
  typeof:''
})


  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZTMyNDU5NTM3NzFhNmY2YzQ2MTkwM2JiODMwZWU5OSIsIm5iZiI6MTczNzA1NTA3NS4wMDQsInN1YiI6IjY3ODk1YjYyNTVlNDliZWQ1ZTk3OTJmMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hu6U2jEzcIqPcrS_kUCNaK33oZXMRHObweA2JX_KV3U'
  }
};
useEffect(()=>{
  
fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));
},[])
  return (
    <div className='player'>

     <FaArrowCircleLeft className='icon' onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default player