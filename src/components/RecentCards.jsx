import {Component} from 'react'
import { Link } from 'react-router-dom';

export class RecentCards extends Component {
  render(){
    let{title, animeid,imgurl,description} = this.props;
    return(
      <>

<div className="flex-shrink-0 m-6 relative overflow-hidden bg-gray-800 rounded-lg max-w-xs shadow-lg group  ">
       
        <div className="relative pt-10 px-10 flex items-center justify-center group-hover:scale-110 transition-transform ">

        <Link id='animeId' to={animeid}><img className="relative w-40 rounded" src={imgurl} alt=""/></Link>  
        </div>
        <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">{description}</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl">{title}</span>
            </div>
        </div>
    </div>
   
      </>
    )
 
  }
}
export default RecentCards