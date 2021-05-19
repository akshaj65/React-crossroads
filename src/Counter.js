import React, {useState, useEffect} from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    useEffect(()=>{
        console.log("Mounting....");
        console.log("updating 1...."+count);
        console.log("updating 2...."+count1);
        return ()=> {
            console.log("Cleanup 1...."+ count );
            console.log("Cleanup 2...."+ count1 );
          }
      },[count, count1])
    
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello i am a Component: {count}</h1>
            <br/>
            <button onClick={()=>setCount1(count1+1)}>Increment</button>
            <h1>Hello i am a Component 1 : {count1}</h1>
        </div>
    )
}



export default Counter