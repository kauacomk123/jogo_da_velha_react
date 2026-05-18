import { useState } from "react";

function Square({value, onSquareClick}){
    return (
    <button className="square" onClick={onSquareClick}>
      {value}</button>
  );
}


export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function hardleClick(){
    const nexSquares = squares.slice();
    nexSquares[0] = "X";
    setSquares(nexSquares);
  }

  return ( 
    <>
    <div className="board-row">
     <Square value={squares[0]} onSquareClick={hardleClick} />
     <Square value={squares[1]} onSquareClick={hardleClick} />
     <Square value={squares[2]} onSquareClick={hardleClick} />
    </div>

    <div className="board-row">
     <Square value={squares[3]} onSquareClick={hardleClick} />
     <Square value={squares[4]} onSquareClick={hardleClick} />
     <Square value={squares[5]} onSquareClick={hardleClick} />
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={hardleClick}/>
      <Square value={squares[7]} onSquareClick={hardleClick}/>
      <Square value={squares[8]} onSquareClick={hardleClick}/>
    </div>
    
    </>
  );
}
