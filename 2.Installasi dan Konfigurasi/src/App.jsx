import { useState } from 'react'

function App() {

  let [number, setNumber] = useState(0);
  function minusHandle(){
    if(number <= 0){
        setNumber('done!');
    } else {
        setNumber(number - 1);
    }
  }

  function plusHandle(){
    if (number >= 10){ 
        setNumber('done!');
    } else {
        setNumber(number + 1);
    }
  }

  function resetHandle(){
    setNumber(0);
  }

  return  (
    <>
      <button onClick={minusHandle} disabled={number == 'done!'}>-</button>
      <h1>{number}</h1>
      <button onClick={plusHandle} disabled={number == 'done!'}>+</button>
      <button onClick={resetHandle}>reset</button>
    </>
  )
}

export default App
