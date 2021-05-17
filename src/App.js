import './App.css'
import Header from './components/Header'
function App() {

  const data='hdhdh'
  return (
   <div>
     <Header data={data} />
   <h1 className='hello'>hello</h1>
   <p>{data}</p>
   </div>
  );
}

export default App;
