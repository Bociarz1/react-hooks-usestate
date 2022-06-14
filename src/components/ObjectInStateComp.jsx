import { useState } from "react";

function ObjectInStateComp() {
  // object is located in state
  const [state, setState] = useState({
    a:1,
    b:2,
    c:3
  })
  // if you want to change only one element of the object, use SPREAD SYNTAX "..."
  const onChangeHandler = (e) => {
    setState({...state, a:e.target.value})
  } 

  return ( 
    <>
      <h3>ObjectInState</h3>
        <ul>
          <li>{state.a}</li>
          <li>{state.b}</li>
          <li>{state.c}</li>
        </ul>
      Input to change only fist element <br/>   
      <input type="text" value={state.a} onChange={onChangeHandler} />
    </>
   );
}

export default ObjectInStateComp;