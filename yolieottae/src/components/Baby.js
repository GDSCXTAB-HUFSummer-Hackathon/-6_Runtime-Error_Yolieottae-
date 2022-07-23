import React from 'react'
import baby from "../img/baby/.jpg";

function Baby(){
    return(
        <div>
            <img src={baby} alt="baby"></img>
            <h2>단호박 닭가슴살 죽</h2>
            <h3>8개월차 중기 아기 먹일 이유식</h3>
            <ul class="pumpkin">
                <li class="ingredient">닭가슴살</li>
                <li class="ingredient">단호박</li>
                <li class="ingredient">불린쌀</li>
                <li class="ingredient">다시마</li>
            </ul>
        </div>
    )
}

export default Baby;