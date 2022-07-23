import React from 'react'
import pet from "../img/pet.png";
import pet2 from "../img/pet2.jpg";
import Header from "./Header";

function Pet(){
    return(
        <div class="choice">
            <Header></Header>
            <img width="400" src={pet} alt="pet"></img>
            <h2>강아지 파르페</h2>
            <h3>강아지를 위한 화식 파르페</h3>
            <ul class="dog">
                <li class="ingredient">#브로콜리</li>
                <li class="ingredient">#당근</li>
                <li class="ingredient">#두부</li>
                <li class="ingredient">#단호박</li>
                <li class="ingredient">#바나나</li>
            </ul>

            <img width="400" src={pet2} alt="pet2"></img>
            <h2>강아지 황태닭가슴살 스틱</h2>
            <h3>닭가슴살로 만든 여러가지 강아지 간식</h3>
            <ul class="dog">
                <li class="ingredient">#닭가슴살</li>
                <li class="ingredient">#베지믹스</li>
                <li class="ingredient">#식초</li>
                <li class="ingredient">#황태파우더</li>
                <li class="ingredient">#코코넛슬라이스</li>
            </ul>
        </div>
    )
}

export default Pet;