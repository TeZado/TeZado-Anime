import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Animevideo from './Watch'
import { Link } from 'react-router-dom'


export default class Livevideo extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  results = []
  searchAnime = []

  constructor(props){
    super(props);

    this.state = {
      search:"",
      page: 1,
      results: this.results,
      loading: false
    }
  }
 
  handleVideos = async ()=>{
    this.setProgress(10);
    let{episodeData,episodeNum} = this.props;

    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}servers/${episodeData}`;
    let data = await fetch(url);
    this.setProgress(40);
    let parsedData = await data.json()
   
    this.setState({
      page: this.state.page + 1,
      results:parsedData[1]})
      this.setProgress(100);
    }

    
 
  
  

    
    render() {
      let{episodeData,episodeNum} = this.props;
    
    return (

      <>
       <div>
        <LoadingBar
          color='#00FF00'
          progress={this.state.progress}
        /></div>

                   {episodeId?.map((episode) => (
                    <>
                    
  
                    <Link to={Animevideo}><Animevideo key={episode.id} episodeData={episode.id} episodeNum={episode.number}/> </Link>
                     
                     
                     
                   </>
                ))}
      </>

      
    )
  }
}


