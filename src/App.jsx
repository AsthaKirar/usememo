
import { useMemo } from 'react';
import { useState } from 'react'
import Nav from './Nav';

const App = () => {
  const [count, setcount]= useState(0);
  const [navdata,setnavdata]=useState("Data of nav")
  const bigfunc=()=>{
    for(let i=0; i<100000; i++){}
    return count;
  };
  const memoizedBigfunc = useMemo(bigfunc,[])

  return (
    <div className='w-[80%] mx-auto rounded bg-zinc-200 p-10'>
      {memoizedBigfunc}
      <Nav navdata={navdata}/>
      <button onClick={()=>setnavdata("changed Dataof nav")}>nav change</button>

      <h1 className='text-5xl font-extrabold'>{count}</h1>
      <button onClick={()=>setcount(count+1)}>count</button>


    </div>
  )
}

export default App