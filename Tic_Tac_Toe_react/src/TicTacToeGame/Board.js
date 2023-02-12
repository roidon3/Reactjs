import React, { useState } from "react";
import Squre from "./Squre";

export default function Board() {
    const[state,setstate]=useState(Array(9).fill(null));
    const[isxturn,setisxturn]=useState(true);
    console.log("state"+state)
    const handleclick=(index)=>{
        if(state[index]!== null){
            return;

        }
        console.log("clicked on"+index);
        const copystate=[...state];
        console.log("1st copystste"+copystate);
        copystate[index]=isxturn?"x":"0";
        setstate(copystate)
        console.log("2ndt copystste"+copystate);
        setisxturn(!isxturn)

    }
    const checkwinner=()=>{
        const winner=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winner){
            const[a,b,c]=logic;
            if(state[a]===state[b] && state[a]===state[c] && state[a]!== null){
                return state[a]
            }
        }
        return false
    }
    const iswinner = checkwinner();
    function play(){
        setstate(Array(9).fill(null))
    }
  return (
    
    <div className="board-container">
      
        {iswinner ?(<h3>{iswinner} won the game<button onClick={play}>Play again</button></h3>):
          <>
          <h4>{isxturn?"x":"0"} please move</h4>
      <div className="board-row">
        <Squre value={state[0]} onClick={()=>handleclick(0)}/>
        <Squre value={state[1]} onClick={()=>handleclick(1)}/>
        <Squre value={state[2]} onClick={()=>handleclick(2)}/>
      </div>
      <div className="board-row">
        <Squre value={state[3]} onClick={()=>handleclick(3)}/>
        <Squre value={state[4]} onClick={()=>handleclick(4)}/>
        <Squre value={state[5]} onClick={()=>handleclick(5)}/>
      </div>
      <div className="board-row">
        <Squre value={state[6]} onClick={()=>handleclick(6)}/>
        <Squre value={state[7]} onClick={()=>handleclick(7)}/>
        <Squre value={state[8]} onClick={()=>handleclick(8)}/>
      </div>
      </>
        }
    </div>
  );
}
