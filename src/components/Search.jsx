import { Component } from 'react'
import Cardsitems from './Cardsitems'

export default class News extends Component {
  results = []

  constructor(props){
    super(props);
 
    this.state = {
      search:"",
      results: this.results,
      loading: false
    }
  }
  



    handleSearch = async ()=>{
      this.props.setProgress(10);
      const animeSearchName =  document.getElementById('animesearch').value
      let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}${animeSearchName}`;
      let data = await fetch(url);
      this.props.setProgress(40);
      let parsedData = await data.json()
     
      window.scrollTo(0, 0)
      this.setState({
        results:parsedData.results})
        this.props.setProgress(100);
        

    }

   
 

 

  
  render() {

  
    return (
      <>

<label className="input input-bordered flex items-center gap-2">
  <input id='animesearch' type="text" className="grow" placeholder="Search" />
  <button onClick={this.handleSearch}>Search</button>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
</label>



      <h2 className="text-white fonohead text-center mt-2">Searched Results</h2>
      <div className="flex flex-wrap  space-x-2 justify-center">
            {this.state.results.map((element)=>{
          return <div   key={element.url}>
          <Cardsitems title={element.title.slice(0, 15)} imgurl={element.image} animeUrl={element.url} epid={element.id}/>
        </div>
        })} 
          
      </div>


       
      </>
        
   
        

    )
  }
}