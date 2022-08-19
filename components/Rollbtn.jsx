import React from "react"
export default function Roll(props){
    
    const rollagain=()=>props.list.map(x=>x.freez? x : x.value)
    return(
        <button className="roll" onClick={props.roll}> {props.iswinner? "Reset \n Game":'Roll'}</button>
    )
}