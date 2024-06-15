import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import '../App.css'; 
import { Link } from 'react-router-dom';


export default function Watch() {
  const {id} = useParams()
  const [progress, setProgress] = React.useState(0)

  const [anime,setAnime] = React.useState({})
  let [animedata,setAnimedata] = React.useState([])
  let [animeep,setAnimeep] = React.useState([1])
  let [trened,setTrened] = React.useState([])
  //destructing object
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
  
  const trending = async ()=>{
  
    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}top-airing`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setTrened(parsedData.results)

    }
        
  // selecting button for episodes
  document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', btnAction);
  });
function btnAction(event) {
  const btn = event.target;
  let tmbtn = btn.innerText
  setAnimeep(tmbtn)
  console.info('button:', btn.innerText, btn);
}

  let handleVideos = async ()=>{
    setProgress(10);

    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}servers/${id+"-episode-"+animeep}`;
    setProgress(40);
    let data = await fetch(url);
    let parsedData = await data.json()
    setProgress(80);
    setAnimedata(parsedData[0])
    setProgress(100);}

  useEffect(()=>{
    getAnime()
    trending()
    handleVideos()
    

  },[])

  return (
    <>
         <div>
        <LoadingBar
          color='#00FF00'
          progress={progress} 
        /></div>
          <div className='videoplayer'>
            <h1 className='cardtext'>{anime.title}</h1>
            <h1 >Episode {animeep}</h1>
          <iframe className='video m-auto' scrolling="no" mozallowfullscreen="true"  allowfullscreen="true"  src={animedata.url} frameBorder="0"></iframe>
          </div>
          <div className='episodenumbers m-auto'>
                  
                  
                  <ul className='flex flex-row '>

                    
                {episodeId?.map((episode) => (
              <>
             
                <li key={episode.id} >
                  <button type='button' className="btn btn-neutral xl" value={episode.id}  onClick={handleVideos}  >{episode.number}</button>
                </li>
                     
              
         
              {/* <a href={episode.url}><button className="btn btn-neutral xl " id='episodenumber'  >{episode.url}</button></a> */}
              
            </>
              ))}
                 
              </ul>
              
          
              </div>
              <div className='watchanime'>
                  {trened.map((element)=>{
                return <div    key={element.url}>
                 
                    <Link to={{pathname: `/${element.id}`}}><img  className='relative cardimages rounded ' src={element.image} alt="not avail" /><h3 className='cardtext'>{element.title.slice(0, 15)}</h3> </Link>
                    
                
                    
                    

                   </div>


                        })} 
                    </div>
              
  </>
  )
}

