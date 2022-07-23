import React from 'react'
import diet from "../img/diet.jpg";
import diet2 from "../img/diet2.jpg";
import Header from "./Header";
function Diet(){
    return(
        <div class="choice">
            <Header></Header>
            <img width="400" src={diet} alt="diet"></img>
            <h2>파프리카 피자</h2>
            <h3>밀가루 없는 건강한 다이어트 피자</h3>
            <ul class="pizza">
                <li class="ingredient">파프리카</li>
                <li class="ingredient">스팸</li>
                <li class="ingredient">양파</li>
                <li class="ingredient">피자치즈</li>
            </ul>

            <img width="400" src={diet2} alt="diet2"></img>
            <h2>두부튀김</h2>
            <h3>칼로리 부담없는 일본식 두부튀김 요리</h3>
            <ul class="pizza">
                <li class="ingredient">두부</li>
                <li class="ingredient">대파</li>
                <li class="ingredient">무순</li>
                <li class="ingredient">감자전분</li>
                <li class="ingredient">가쓰오부시</li>
            </ul>
        </div>
    )
}

export default Diet;