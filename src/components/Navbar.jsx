import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'


export default class Navbar extends Component {
  state = {
    progress:0
  }

  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  results = []

  constructor(){
    super();
 
    this.state = {
      page: 1,
      results: this.results,
      loading: false
    }
  }


  handleSearch = async ()=>{
    let animeSearchName =  document.getElementById('animesearch').value
    animeSearchName.replace(' ','')
    this.setProgress(10);

    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}${animeSearchName}`;
    let data = await fetch(url);
    this.setProgress(40);
    let parsedData = await data.json()
 
    window.scrollTo(0, 0)
    this.setState({
    results:parsedData.results})
    this.setProgress(100);
  

    
      
    

  }
     
  render() {
    return (
      <>
      <div>
        <LoadingBar
          color='#00FF00'
          progress={this.state.progress}
        /></div>
            <div className="navbar bg-base-100">
      <div className="flex-1">
       <Link to="/"><button className="btn btn-neutral mr-3"> Home</button></Link> 
  
        
      </div>
    <div >
      <div className="dropdown">

<Link to='/'><input  tabIndex={0} id='animesearch' type="text" placeholder="Search" className="input input-bordered w-52 ml-5"  /> </Link>

      
        
        <button onClick={this.handleSearch}>Search</button>
 

      
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box searchbarresult">
    
  <div >
    
   
            {this.state.results.map((element)=>{
          return <div   key={element.url}>
            
           
               <li><Link to={element.id} > {element.title.slice(0, 15)}<img className='w-30' src={element.image} alt="" /></Link></li>
        </div>
        })} 
          
      </div>
       
 

  </ul>
</div>

</div>
    </div>

  
      </>

    )
  }
}
