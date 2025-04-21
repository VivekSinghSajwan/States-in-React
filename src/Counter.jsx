import {useState} from "react";

function Counter(){
    const [count,setCount] = useState(0);

    console.log("✅ Component rendered Outside");

    function inCount(){
        setCount(count+1);
    }
    function decCount(){
        if (count>0)
            setCount(count-1);
        else
            alert("Value below 0");
    }

    return (
        <div>
            {console.log(count)}
            <h1>
                {console.log("✅ Component rendered inside H1")}
                States in React
            </h1>
            <h2>Count : {count}</h2>
            <button onClick={inCount}>
                Increement
            </button>
            {console.log("🧪 Below increment button")}
            &nbsp;
            <button onClick={decCount}>
                Decreement
            </button>
            {console.log("🧪 Below decrement button")}
        </div>
    )
}

export default Counter;