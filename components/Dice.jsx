import React from "react";
import Bullets from './bullets'

export default function Dice(props){
    
   
    const numsArr=props.list.map(x=>(<div key={x.id}  className={`num  ${x.freeze? "freezed":""}`} onClick={(event)=>props.toggler(event,x.id)}>
      <img className='Dice-face' src={`../Dice-${x.value}-b.svg`}></img>
        </div>))

   return(
    <div className="dice--container">
    {numsArr}

    </div>
    
   )


}