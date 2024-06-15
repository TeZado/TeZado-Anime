import React, { Component } from 'react'
import RecentCards from './RecentCards';

export default class RecentEp extends Component {
  
    results = []

  constructor(){
    super();

    this.state = {
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
  
    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}recent-episodes?page=${this.state.page + 1}`;
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

    let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}recent-episodes?page=${this.state.page - 1}`;
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

         <h2 className="text-white fonohead text-center mt-2">Recent Episodes</h2>
      <div className="flex flex-wrap  space-x-2 justify-center">
            {this.state.results.map((element)=>{
          return <div   key={element.url}>
          <RecentCards title={element.title.slice(0, 15)} imgurl={element.image} animeid={element.id}/>
        </div>
        })} 
          
      </div>
      <div className='px-12 py-12 space-x-2 flex justify-center '>
          <button disabled={this.state.page<=1} type='button' className="btn btn-active btn-neutral " onClick={this.handlePrevClick}>Prev</button>
        <button  type='button' className="btn btn-active btn-neutral m-auto" onClick={this.handleNextClick}>Next</button>
      </div>

        </>

    )
  }
}
