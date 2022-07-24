import React from 'react'
import snack from "../img/snack.jpg";
import snack2 from "../img/snack2.jpg";
import Header from "./Header";
function Snack(){
    return(
        <div class="choice">
            <Header></Header>
            <div class="v1">
            <img width="400" src={snack} alt="snack"></img>
            <h2>또띠아 마늘칩</h2>
            <h3>10분이면 간단히 만드는 한입쏙 마늘칩</h3>
            <ul class="chip">
                <li class="ingredient">#또띠아</li>
                <li class="ingredient">#다진마늘</li>
                <li class="ingredient">#꿀</li>
                <li class="ingredient">#버터</li>
            </ul>
            </div>
            <div class="v2">
            <img width="400" src={snack2} alt="snack2"></img>
            <h2>생딸기 오믈렛</h2>
            <h3>No 오븐! 시중에 파는 것 같은 딸기 오믈렛</h3>
            <ul class="chip">
                <li class="ingredient">#핫케이크가루</li>
                <li class="ingredient">#달걀</li>
                <li class="ingredient">#우유</li>
                <li class="ingredient">#딸기</li>
                <li class="ingredient">#생크림</li>
            </ul>
            </div>
        </div>
    )
}

export default Snack;