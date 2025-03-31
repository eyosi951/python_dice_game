import { useState } from "react"
import {FaStar} from 'react-icons/fa'
import './style.css';

export default function StarRating({numberOfStars = 5}){
    const [rating, setRating]= useState(0);
    const [hover, setHover]= useState(0)

    function handleOnclick(getcurrentId){
     setRating(getcurrentId)
    }
    function handleMouseOver(getcurrentId){
     setHover(getcurrentId)
    }
    function handleMouseLeave(){
       setHover(rating)
    } 
       

     return(
        <div>
          {
             [... Array(numberOfStars)].map((_,index)=>{
                index += 1
                return <FaStar
                key={index}
                className={ index <= (hover || rating)? 'active': 'inactive'}
                onClick={()=> handleOnclick(index)}
                onMouseMove={()=> handleMouseOver(index)}
                onMouseLeave={()=> handleMouseLeave()}
                size={40}
               />
                
             })
          } 


        </div>
     )
}