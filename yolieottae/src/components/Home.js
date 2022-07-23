import homeImage1 from "../img/home-img.jpg";
import Header from "./Header";

function Home() {
  return (
    <div className="wrap">
      <Header></Header>

      <section className="sub-coment">
        <img className="sub-img" alt="sub-img1" src={homeImage1} />
      </section>

      <footer>
        <div className="footer-div">
          <p className="footer-content">Runtime Error &copy; 요리어때?</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
