import React from "react"
export default function Bullets(props){
   
   
      let newarr=[];
   for(let i=0;i<props.num;i++){
   newarr.push(<div className={`bullet  ${--i}`} key= {i} ></div>);
   
}
return newarr}
