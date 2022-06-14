import { useState } from "react";

function ArrayInStateComp() {
   // object is located in state
  const [state, setState] = useState([1,2,3])

  const [newArrayElement,setNewArrayElement] = useState("")

  const onChangeHandler = (e) => {
    setNewArrayElement(e.target.value)
  }

  // if you want to add new element to Array, use SPREAD SYNTAX "[...state,newElement]"
  const onClickHandler = () => {
    setState([...state, newArrayElement])
  }

  return ( 
    <>
    <h3>ArrayInState</h3>
      <ul>
        {state.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      Input to add element to Array <br/>
      <input type="text" value={newArrayElement} onChange={onChangeHandler} />
      <button onClick={onClickHandler}>Add an element to Array</button>
    </>
   );
}

export default ArrayInStateComp;