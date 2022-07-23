import React from 'react'
import vegan from "../img/vegan/.jpg";
import Header from "./Header";
function Vegan(){
    return(
        <div>
            <Header></Header>
            <img src={vegan} alt="vegan"></img>
            <h2>연두부 샐러드</h2>
            <h3>초스피드로 즐기는 비건 두부 샐러드</h3>
            <ul class="salad">
                <li class="ingredient">연두부</li>
                <li class="ingredient">어린잎</li>
                <li class="ingredient">파프리카</li>
                <li class="ingredient">양파</li>
            </ul>
        </div>
    )
}

export default Vegan;