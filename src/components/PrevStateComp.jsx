import { useEffect, useState } from "react";

function PrevStateComp() {
  const [state, setState] = useState(0)

  {/* if you want to change previous state value use 
      setState(prevState => prevState + 1 )*/}
  useEffect( () => {
    setState( prevState => prevState+1)
  },[])

  return ( 
    <>
      <h3>PrevState</h3>
      {state}
    </>
   );
}

export default PrevStateComp;