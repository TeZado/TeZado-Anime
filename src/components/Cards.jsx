import { Component } from 'react'
import Cardsitems from './Cardsitems'
import Slider from './Slider'
import Popular from './Popular'
import '../App.css';
export default class News extends Component {
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
  
  async componentDidMount(){
    this.props.setProgress(10);
    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}recent-episodes`;
    let data = await fetch(url);
    this.props.setProgress(40);
    let parsedData = await data.json()
    this.setState({results:parsedData.results})
    this.props.setProgress(100);
  
    
    }
  


    handleNextClick = async ()=>{
      this.props.setProgress(10);
      let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}${this.state.page + 1}`;
      let data = await fetch(url);
      this.props.setProgress(40);
      let parsedData = await data.json()
      window.scrollTo(0, 0)

      this.setState({
        page: this.state.page + 1,
        results:parsedData.results})
      this.props.setProgress(100);
  
        

    }
    handlePrevClick = async ()=>{
      this.props.setProgress(10);
  
      let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}${this.state.page - 1}`;
      let data = await fetch(url);
      this.props.setProgress(40);
      let parsedData = await data.json()
      window.scrollTo(0, 0)

      this.setState({
        page: this.state.page - 1,
        results:parsedData.results})
      this.props.setProgress(100);
  
        

    }
 

 

  
  render() {
   

    return (
      <>
          <Slider />
  <div className=' mainpagecards '>
<div className='div1'>
  <h2 className="text-white fonohead text-center mt-2">Latest Episodes</h2>
      <div className="flex flex-wrap  space-x-2 episodelist">
            {this.state.results.map((element)=>{
          return <div   key={element.url}>
          <Cardsitems title={element.title.slice(0, 15)}  imgurl={element.image} animeUrl={element.url} epid={element.id} description={element.description}/>
        </div>
        })} 
          
      </div>
      <div className='px-12 py-12 space-x-2 flex justify-center '>
          <button disabled={this.state.page<=1} type='button' className="btn btn-active btn-neutral" onClick={this.handlePrevClick}>Prev</button>
        <button  type='button' className="btn btn-active btn-neutral m-auto" onClick={this.handleNextClick}>Next</button>
      </div>
  </div>
    
    {/* <div className='div2'>
    <h2 className="text-white fonohead text-center mt-2">Popular</h2>
    <Popular />
    </div> */}
  </div>
  


       
      </>
        
   
        

    )
  }
}
















