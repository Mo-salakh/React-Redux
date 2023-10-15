import { useDispatch, useSelector } from "react-redux";



function Text2(){

    let text = useSelector(state => state)

    const dispach = useDispatch()

    function handler() {
      return  (dispach ({
        type: "Change"
      } )

      )
    }

    return (
        <div className="App">
            {text}

            <button onClick={handler}>
                +
            </button>
        </div>
        
    )
}

export default Text2;