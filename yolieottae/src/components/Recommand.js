
import React from 'react';
import Header from "./Header";

import Vegan from "./Vegan";
import Diet from "./Diet";
import Snack from "./Snack";
import Baby from "./Baby";
import Pet from "./Pet";
function Recommand(){
    return (
        
        <div>
            <Header></Header>
            <ul class="menu-bar">
                <li class="bar-div">
                    <button class="vegan">비건</button>
                </li>
                <li class="bar-div">
                    <button class="diet">다이어트</button>
                </li>
                <li class="bar-div">
                    <button class="snack">간식</button>
                </li>
                <li class="bar-div">
                    <button class="baby">이유식</button>
                </li>
                <li class="bar-div">
                    <button class="pet">반려견</button>
                </li>

                <Vegan></Vegan>
                <Diet></Diet>
                <Snack></Snack>
                <Baby></Baby>
                <Pet></Pet>
            </ul>
        </div>
    )
}

export default Recommand;