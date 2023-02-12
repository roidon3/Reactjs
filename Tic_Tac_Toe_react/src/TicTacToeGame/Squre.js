import React from 'react';

export default function Squre(props) {
  return (
    
    <div onClick={props.onClick} className='squre' style={{border:"1px solid",width:"100%",height:"100px",display:"flex",justifyContent:"center",alignItems: "center" }}>
         
        
      <h5>{props.value}</h5>
    </div>
  )
}
