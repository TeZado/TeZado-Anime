import {Component} from 'react'
import { Link } from 'react-router-dom';
import '../App.css'; 

export class Cardsitems extends Component {

 
  render(){
    let{title,imgurl,description,epid} = this.props;
    return(
      <>

<div>
       
  <div className='cardbox'>
        <Link id='animeId' to={epid}><img className="relative cardimages" src={imgurl} alt=""/></Link>
        </div>
        <div >
            <span>{description}</span>
            <div className="flex justify-between">
                <span className="block font-semibold text-xl cardtext">{title}</span>
            </div>
        </div>
    
       </div>

     
      
   
      </>
    )
 
  }
}
export default Cardsitems