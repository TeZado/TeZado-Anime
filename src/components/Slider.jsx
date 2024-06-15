import React, { Component } from 'react'
import Carousel from "react-multi-carousel";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import '../App.css'

export default class Slider extends Component {
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
      
        let url = `${(import.meta.env.VITE_REACT_ANIME_URL)}top-airing`;
        let data = await fetch(url);
        let parsedData = await data.json()
      
        this.setState({results:parsedData.results})
      
        
        }
  render() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
     <>
      <div >
          <Carousel responsive={responsive}   autoPlay infinite  autoPlaySpeed={3000}  showDots swipeable sliderClass="" slidesToSlide={1}  >
            {this.state.results.map((element)=>{
                return <div   key={element.url}>
                    <Link className='sliderdata'  to={element.id}>  <div className='sliderdata'  ><img className='relative sliderimg rounded  ' src={element.image} alt="not avail" /><div className='slidername  '>{element.title.slice(0, 15)} <div className='slidergen'>{element.genres.join(", ")}  </div> </div></div></Link>
                    

        </div>
        })} 
        </Carousel>
          
      </div>

     </>
    )
  }
}
