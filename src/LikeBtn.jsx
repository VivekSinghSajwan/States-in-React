import { useState } from "react"

export default function LikeBtn(){

    let [btnClicked, isbtnClicked] = useState(false);
    
    function isClicked(){
        isbtnClicked(!btnClicked);
    }
    let styles = {
        margin: "10px",
        color: "red"
    }

    return (
        <button onClick={isClicked} style={styles}>
            {btnClicked ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
        </button>
    )
}