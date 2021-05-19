import Counter from './Counter'
import {useState} from 'react'
//its a lifecycle | mounting, updating and unmounting

function App(){
  const [state, setState] = useState(false )
  return (
    <div>
      <h1 onClick={()=>setState(!state)}>(Show is mounting, hide is unmounting, increment is updating) <br/> Show/Hide </h1>
      { state && <Counter />}
    </div>
  );
}


export default App;

// common usage
// { state ? <Counter />: null}
// shortcut usage
// { state && <Counter />}