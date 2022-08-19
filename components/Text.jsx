export default function Text(props){
   return(
      <div className="text--container">
            <h2>Tenzies</h2>
            <div>Roll until all dice are the same. <br/>  Click each dice to freeze it at its current value between rolls.</div>
            <p className="Score">Best Score:{props.best}</p>
            <p className="Score">Score:{props.count}</p>
      </div>

   )

}