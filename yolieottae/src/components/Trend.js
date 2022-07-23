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
            <img class="trend-bar-img" src={trendImage1} />
        </section>
        <section class="keyword-trend">
            <button class="icon-food">
                <FontAwesomeIcon icon={faCarrot} size="5x" />
            </button>
            <button class="icon-mealkit" href="">
                <FontAwesomeIcon icon={faKitchenSet} size="5x" />
            </button>
            <button class="icon-theme" href="">
                <FontAwesomeIcon icon={faUtensils} size="5x" />
            </button>
            <button class="icon-health" href="">
                <FontAwesomeIcon icon={faHandHoldingMedical} size="5x" />
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