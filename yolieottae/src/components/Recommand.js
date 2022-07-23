
import React from 'react';
import Header from "./Header";

function Button(){
    return (
        
        <div>
            <Header></Header>
            <ul class="menu">
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
            </ul>
        </div>
    )
}

export default Button;