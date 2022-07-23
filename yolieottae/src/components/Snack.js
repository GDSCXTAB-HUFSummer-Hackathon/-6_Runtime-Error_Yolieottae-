import React from 'react'
import snack from "../img/snack/.jpg";
import Header from "./Header";
function Snack(){
    return(
        <div>
            <Header></Header>
            <img src={snack} alt="snack"></img>
            <h2>또띠아 마늘칩</h2>
            <h3>10분이면 간단히 만드는 한입쏙 마늘칩</h3>
            <ul class="chip">
                <li class="ingredient">또띠아</li>
                <li class="ingredient">다진마늘</li>
                <li class="ingredient">꿀</li>
                <li class="ingredient">버터</li>
            </ul>
        </div>
    )
}

export default Snack;