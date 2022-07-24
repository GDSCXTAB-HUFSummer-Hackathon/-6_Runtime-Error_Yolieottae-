import React from 'react'
import vegan from "../img/vegan.jpg";
import vegan2 from "../img/vegan2.jpg";
import Header from "./Header";
function Vegan(){
    return(
        <div class="choice">
            <Header></Header>
            <img width="400" src={vegan} alt="vegan"></img>
            <h2>연두부 샐러드</h2>
            <h3>초스피드로 즐기는 비건 두부 샐러드</h3>
            <ul class="salad">
                <li class="ingredient">#연두부</li>
                <li class="ingredient">#어린잎</li>
                <li class="ingredient">#파프리카</li>
                <li class="ingredient">#양파</li>
            </ul>

            <img width="400" src={vegan2} alt="vegan2"></img>
            <h2>비건 아몬드쿠키</h2>
            <h3>No버터! No우유! 붓고 섞고 굽기만 하면되는 비건 쿠키</h3>
            <ul class="salad">
                <li class="ingredient">#바나나</li>
                <li class="ingredient">#아몬드</li>
                <li class="ingredient">#오트밀</li>
                <li class="ingredient">#베이킹파우더</li>
            </ul>
        </div>
    )
}

export default Vegan;