import {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    console.log("✅ Component rendered Outside");

    function inCount(){
        setCount(count+1);
    }

    return (
        <div>
            <h1>
                {console.log("✅ Component rendered inside H1")}
                States in React
            </h1>
            <button onClick={inCount}>
                {console.log("✅ Component rendered inside btn")}
                Count: {count}
            </button>
        </div>
    )
}

export default Counter;