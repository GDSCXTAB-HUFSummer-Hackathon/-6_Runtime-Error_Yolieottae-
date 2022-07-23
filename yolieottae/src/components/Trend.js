import Header from "./Header";
import trendImage1 from "../img/trend-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons"; 
import { faHandHoldingMedical } from "@fortawesome/free-solid-svg-icons";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons";


function Trend() {
  return (
    <div class="wrap">
        <Header></Header>
        <section class="trend-bar">
            <div class="trend-comment">
                <span><span class="tab">2022</span> 트랜드</span><br/>
                코로나가 바꾼 먹거리 트랜드<br/>
                다가오는 엔데믹 흐름에 맞춘 다양한 컨셉
            </div>
            <img class="trend-bar-img" src={trendImage1} />
        </section>
        
        <section class="keyword-trend">
            <button class="icon-food">
                <div class="btn-div">
                    <FontAwesomeIcon icon={faCarrot} size="5x" />
                    먹거리
                </div>
            </button>
            <button class="icon-mealkit" href="">
                <div class="btn-div">
                    <FontAwesomeIcon icon={faKitchenSet} size="5x" />
                    밀키트
                </div>
            </button>
            <button class="icon-theme" href="">
                <div class="btn-div">
                    <FontAwesomeIcon icon={faUtensils} size="5x" />
                    식당
                </div>
            </button>
            <button class="icon-health" href="">
                <div class="btn-div">
                    <FontAwesomeIcon icon={faHandHoldingMedical} size="5x" />
                    건강
                </div>
            </button>
        </section>
        
        <section>

        </section>
        
        <footer>
            <div class="footer-div">
                <p class="footer-content">
                Runtime Error &copy; 요리어때?
                </p>
            </div>
        </footer>
    </div>
  );
}

export default Trend;