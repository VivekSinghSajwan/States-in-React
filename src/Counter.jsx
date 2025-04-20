import {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    function inCount(){
        setCount(count+1);
    }

    return (
        <div>
            <h1>States in React</h1>
            <button onClick={inCount}>Count: {count}</button>
        </div>
    )
}

export default Counter;