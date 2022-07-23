
import React from 'react';
import Header from "./Header";
import { Link } from "react-router-dom";

function Recommand(){
    return (
        
        <div>
            <Header></Header>
            <ul class="menu-bar">
                
                <li class="bar-div">
                <Link to="/vegan">
                    <button class="vegan">비건</button>
                </Link>
                </li>
                
                
                <li class="bar-div">
                <Link to="/diet">
                    <button class="diet">다이어트</button>
                </Link>
                </li>
                
                
                <li class="bar-div">
                <Link to="/snack">
                    <button class="snack">간식</button>
                </Link>
                </li>
                
                
                <li class="bar-div">
                <Link to="/baby">
                    <button class="baby">이유식</button>
                </Link>
                </li>
                
                
                <li class="bar-div">
                <Link to="/pet">
                    <button class="pet">반려견</button>
                </Link>
                </li>
                

            </ul>
        </div>
    )
}

export default Recommand;