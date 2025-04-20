import { useState } from "react"

export default function LikeBtn(){

    let [btnClicked, isbtnClicked] = useState(false);
    
    function isClicked(){
        isbtnClicked(!btnClicked);
    }
    let styles = {
        margin: "10px"
    }

    return (
        <button onClick={isClicked} style={styles}>
            {btnClicked ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i>}
        </button>
    )
}