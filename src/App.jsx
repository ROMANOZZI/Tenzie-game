import React, { useEffect } from 'react'
import useWindowSize from './useWindowSize'
import Text from '../components/Text'
import './index.css'
import Dice from '../components/Dice'
import Rollbtn from '../components/Rollbtn'
import Confetti from 'react-confetti'
function App() {
  
  const randomize=()=>Math.floor(Math.random()*6)+1;
  const nums=[1,2,3,4,5,6,7,8,9,10];
  const elements= nums.map(x=>({id:x,value:randomize(),freeze:false}));
  const [list,setList]=React.useState(elements);
  const [winner,setwinner]=React.useState(false);
  const { width, height } = useWindowSize();
 
  const [best,setBest]=React.useState(()=>JSON.parse(localStorage.getItem('Best'))||0);
  const [count,setCount]=React.useState(0);
  function allAreEqual(array) {
    const result = array.every(element => {
      if (element === array[0]) {
        return true;
      }
    });
  
    return result;
  }
  function allfreezed(list){
    
    return list.filter(x=>x.freeze==false).length==1;
  }

  const toggler=(e,id)=>{ 
    if(allfreezed(list)&&allAreEqual(list.map(x=>x.value))){
    setwinner(true)}
  setList(prev=>{
    
    return prev.map(x=> x.id==id? {...x,freeze:!x.freeze}:x)})};
  const roll=()=>{
    
    if(winner){
      setCount(0);
      if(best==0)setBest(count);
      else if(count<best) setBest(count);
      setList(prev=>prev.map(x=>({...x,value:randomize(),freeze:false})))
      setwinner(false);
    }
   
    else setList(prev=>prev.map(x=>{
      return(
      {...x,value: x.freeze? x.value : randomize()})}));
      setCount(count=>count+list.filter(x=>x.freeze==false).length )
      
        
      
  }
  React.useEffect(()=>{
    localStorage.setItem('Best',`${best}`)
  },[best])
  
  

  return (
    <div>
    <Text best={best}
           count={count}/>
    <Dice list={list}
    toggler={toggler} />
    <Rollbtn list={list}
    roll={roll}
    iswinner={winner}
     />
     { winner&& <Confetti width={width} height={height}/>}
    </div>
  )
}


export default App
