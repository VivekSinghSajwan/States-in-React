import {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    console.log("✅ Component rendered Outside");

    function inCount(){
        setCount(count+1);
    }
    function decCount(){
        setCount(count-1);
    }

    return (
        <div>
            <h1>
                {console.log("✅ Component rendered inside H1")}
                States in React
            </h1>
            <h2>Count : {count}</h2>
            <button onClick={inCount}>
                Increement
            </button>
            &nbsp;
            <button onClick={decCount}>
                Decreement
            </button>
        </div>
    )
}

export default Counter;