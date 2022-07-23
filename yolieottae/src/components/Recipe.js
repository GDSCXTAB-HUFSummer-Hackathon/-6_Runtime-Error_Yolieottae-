import initImage0 from "../img/recipe/baby-food-img.jpg";
import initImage1 from "../img/recipe/cabbage-roll-img.jpg";
import initImage2 from "../img/recipe/creampasta.jpg";
import initImage3 from "../img/recipe/eggslot.jpg";
import initImage4 from "../img/recipe/madeleine-img.jpg";
import initImage5 from "../img/recipe/meat.jpg";
import initImage6 from "../img/recipe/milk=pudding-img.jpg";
import initImage7 from "../img/recipe/popcorn.jpg";
import initImage8 from "../img/recipe/potatoball.webp";
import initImage9 from "../img/recipe/shrimp.jpg";
import initImage10 from "../img/recipe/tofu-snack-img.jpg";
import initImage11 from "../img/recipe/bibimbap.jpg";
import initImage12 from "../img/recipe/carrrotsoup.jpg";
import initImage13 from "../img/recipe/cucumber.jpg";
import initImage14 from "../img/recipe/kimchi.jpg";
import initImage15 from "../img/recipe/scrambble.jpg";
import initImage16 from "../img/recipe/seaweedsoup.jpg";
import initImage17 from "../img/recipe/twistpepper.jpg";
import initImage18 from "../img/recipe/gimbab.jpg";

function Recipe(){
    const arrayImage = [
        initImage0,
        initImage1,
        initImage2,
        initImage3,
        initImage4,
        initImage5,
        initImage6,
        initImage7,
        initImage8,
        initImage9,
        initImage10,
        initImage11,
        initImage12,
        initImage13,
        initImage14,
        initImage15,
        initImage16,
        initImage17,
        initImage18
    ];
    return(
        <body>
            <div>
                <span id="img">
                    <img src={arrayImage[type-1]} alt="meunImage" />
                </span>
                <span id="meun">
                    <h1>{/*요리명.[type-1]*/}</h1>
                </span>
            </div>
            <div>
                <span id="ingredient">
                    <h1>재료</h1>
                    {/* 재료코드 */}
                </span>
                <span id="recipe">
                    <h1>레시피</h1>
                    {/*레시피코드 */}
                </span>
            </div>
        </body>
    );
}
export default Recipe;