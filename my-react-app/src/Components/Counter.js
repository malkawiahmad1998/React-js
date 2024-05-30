import React,{useState} from "react";

function Counter(){
    var [count,setCount] = useState(0)
    return(
        <>
            <h1>clicked this btn {count}</h1>
            <button onClick={()=>
            {
                setCount(count+1)
            }
            }>increment++</button>
        
        
        </>
    )
}

export default Counter;