import { examWrite } from "../utils/firebaseConfig";
import homeImage1 from "../img/home-img.jpg";
import Header from "./Header";

function Home() {
  return (
    <div class="wrap">
      <Header></Header>
      <section class="sub-coment">
        <img class="sub-img" alt="sub-img1" src={homeImage1} />
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
