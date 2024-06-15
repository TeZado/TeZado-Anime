import React from 'react'
import { useEffect } from 'react'
import '../App.css';
import { Link } from 'react-router-dom';

export default function Popular() {
    let [popular,setpopular] = React.useState([])
    
   
    const componentDidMount = async()=>{

        let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}popular`;
        let data = await fetch(url);
        let parsedData = await data.json()
    
        setpopular(parsedData.results)
        }
        useEffect(()=>{
            componentDidMount()
          },[])
  return (
    <>


       
     
     
   
    <div className='div2 popularrow' >
    {popular.map((element)=>{
                return <div   key={element.id}>
                      <div className='cardbox'>
             <Link id='animeId' to={element.id}><img className="relative cardimages cardpopular" src={element.image} alt=""/></Link>
             </div>
             <div >
                 <div className="flex justify-between">
                     <span className="block font-semibold text-xl cardtext">{element.title.slice(0, 15)}</span>
                 </div>
             </div>
                    
        </div>
        })} 
                    
                    

       
  </div>
    </>
  )
}
