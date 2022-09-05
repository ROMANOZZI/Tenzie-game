import React from "react";
import Bullets from './bullets'
import Dice1 from '../Dice-1-b.svg'
import Dice2 from '../Dice-2-b.svg'
import Dice3 from '../Dice-3-b.svg'
import Dice4 from '../Dice-4-b.svg'
import Dice5 from '../Dice-5-b.svg'
import Dice6 from '../Dice-6-b.svg'

export default function Dice(props){
    const Dice=[Dice1,Dice2,Dice3,Dice4,Dice5,Dice6]
   
    const numsArr=props.list.map(x=>(<div key={x.id}  className={`num  ${x.freeze? "freezed":""}`} onClick={(event)=>props.toggler(event,x.id)}>
      <img className='Dice-face' src={Dice[x.value]}></img>
        </div>))

   return(
    <div className="dice--container">
    {numsArr}

    </div>
    
   )


}