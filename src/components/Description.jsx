import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'; 
import Watch from './Watch'



export default function Description() {
  const [progress, setProgress] = useState(0)
  const {id} = useParams()
          
  const [anime,setAnime] = React.useState({})
  //destructing object
  const {title,image,otherName,subOrDub,totalEpisodes,type,url,episodes,description,genres} = anime
  const {episodes:episodeId} = anime

    
    
  const getAnime = async()=>{
    setProgress(10);
  
    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}info/${id}`;
    let data = await fetch(url);
    setProgress(40);
    let parsedData = await data.json()
    setAnime(parsedData)
  
    setProgress(100);
  }
  

 

  useEffect(()=>{
    getAnime()
    

  },[])



 
  return (
    <>
     <div>
        <LoadingBar
          color='#00FF00'
          progress={progress} 
        /></div>
    <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
      <div className="pt-8">
        <div className="flex items-center">
          <ol className="flex w-full items-center overflow-hidden">
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <Link to='/'>Home</Link>
            </li>
            <li className="text-body mt-0.5 text-base">/</li>
            <li className="text-body hover:text-heading px-2.5 text-sm transition duration-200 ease-in first:pl-0 last:pr-0">
              <Link to='#'>{title}</Link>
            </li>
          </ol>
        </div>
      </div>
      
      <div className="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
        <div className="col-span-5 grid grid-cols-2 gap-2.5">
          {Array.from({ length: 1}, (_, i) => (
            <div key={i} className="col-span-1 transition duration-150 ease-in hover:opacity-90">
              <img
                src={image}
                alt="Anime Image"
                className="w-full object-cover"
              />
            </div>
          ))}
        </div>
        

        <div className="col-span-4 pt-8 lg:pt-0">
          <div className="mb-7 border-b border-gray-300 pb-3">
            <h2 className="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-base">
           {type}
            </h2>
            <div className="mt-5 flex items-center ">
              <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
               {title}
              </div>
              <span className="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                {subOrDub}
              </span>
            </div>
          </div>
         

        
      
          <div>
            <ul className="space-y-5 pb-1 text-sm">
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">Total Episodes : {totalEpisodes}</span>
                
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">Genres: {genres && genres.join(", ")}</span>
                
              </li>
              <li>
                <span className="text-heading inline-block pr-2 font-semibold">Description:  {description}</span>
                <a className="hover:text-heading transition hover:underline" href="#">
                  
                </a>
              </li>

            </ul>
          </div>
          <div className='name'>
         
            <header className="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6 ">
              <h2 className="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
           
             
                     
                    <Link to='Watch'><button className="btn btn-neutral xl">Watch</button></Link>
                     
      
                  
    
              
              </h2>
            </header>
          </div>
        </div>
      </div>
    </div>
    



    </>
  )
}
