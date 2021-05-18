import {useState} from 'react'
import Counter from './Counter'
import Counter1 from './Counter1'
import Employee from './Employee'

function App() {
  const [count, setCount] = useState(0)
  // const arr = [1,2,3,4]
  // const [j,k,l,m] = arr
  //        1,2,3,4
  const addCount =()=>{
    setCount(count+1)
    console.log(count)
  }

  let obj={
    title:'1st counter',
    //count:count  //if both are same only the below line is enough 
    count
    ,
    place:'hello'
  }
  
  let emp=[
    {name:"New Delhi", km:1400},
    {name:"Bangalore", km:2},
    {name:"Chennai", km:250}
  ]

  return (
  <div>
    <button onClick={addCount}>Add</button>

    <h1>Default code</h1>
    <Counter title='1st counter'count={count}/>
    <Counter title='2nd counter'count={count}/>
    <br/>

    <h1>using spread function (...objectname)</h1>
    <Counter1 {...obj}/>
    <Counter1 title='2nd counter'count={count}/> 
    <br/>

    {
      //newobj is a name given to individual in emp list
      
      //each child in a list should have a uniqiue "key" prop,
      //we will get warning in console
      //so declare a index in obj(map can take upto 3 arguements)
      //if there is only one thing to return then we can write it directly without return and {} 
      // emp.map((newobj,index)=> <Employee key={index} {...newobj} />)
      emp.map((newobj,index)=>{
        return (
          <div>
          {/*<Employee key={index} name = {newobj.name} km={newobj.km} />*/}
          {/*Using spread function*/}
          <Employee key={index} {...newobj} />
          </div>
        )
      })
    }
  </div>
  );
}
//named export
//export const use='test'
//default export
export default App;
