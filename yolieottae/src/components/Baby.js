import React from 'react'
import baby from "../img/baby.jpg";
import baby2 from "../img/baby2.jpg";
import Header from "./Header";

function Baby(){
    return(
        <div class="choice">
            <Header></Header>
            <img width="400" src={baby} alt="baby"></img>
            <h2>단호박 닭가슴살 이유식</h2>
            <h3>8개월차 중기 아기 먹일 이유식</h3>
            <ul class="soup">
                <li class="ingredient">닭가슴살</li>
                <li class="ingredient">단호박</li>
                <li class="ingredient">불린쌀</li>
                <li class="ingredient">다시마</li>
            </ul>
            <img width="400" src={baby2} alt="baby2"></img>
            <h2>난자완스 이유식</h2>
            <h3>13개월차 완료기 아기 먹일 이유식</h3>
            <ul class="soup">
                <li class="ingredient">다시마</li>
                <li class="ingredient">양파</li>
                <li class="ingredient">버섯</li>
                <li class="ingredient">호박</li>
            </ul>
        </div>
    )
}

export default Baby;