import React from 'react'
import pet from "../img/pet/.png";

function Pet(){
    return(
        <div>
            <img src={pet} alt="pet"></img>
            <h2>강아지 파르페</h2>
            <h3>강아지를 위한 화식 파르페</h3>
            <ul class="dog">
                <li class="ingredient">브로콜리</li>
                <li class="ingredient">당근</li>
                <li class="ingredient">두부</li>
                <li class="ingredient">단호박</li>
                <li class="ingredient">바나나</li>
            </ul>
        </div>
    )
}

export default Pet;