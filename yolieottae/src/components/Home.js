import { examWrite } from "../utils/firebaseConfig";
import subImage1 from "../img/food-img1.png";
import Header from "./Header";

function Home() {
  return (
    <div>
      <Header></Header>
      <section class="sub-coment">
        <div class="mini-coment">
          음식엔 다양한 사연들이 있다.<br/>
          음식이 만들어지는 과정까지 그 사람이<br/> 
          겪은 과정들이 있어야 나오는 음식.
        </div>
        <div class="img-div">
          <img class="sub-img" alt="sub-img1" src={subImage1} />
        </div>
      </section>
      <section>
        
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

export default Home;
