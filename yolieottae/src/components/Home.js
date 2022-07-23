import homeImage1 from "../img/home-img.jpg";
import Header from "./Header";

function Home() {
  return (
    <div className="wrap">
      <Header></Header>

      <section className="introduce">
        <div>
          <h3>
            "요리 어때"
            <small>
              는 태그 검색을 통해 다양한 식생활을 충족하는 요리 레시피
              사이트입니다.
            </small>
          </h3>
          요리 어때의 태그 기반 검색으로 사용자는 채식주의, 알러지, 종교 등에
          대응한 특수한 식생활에 도움이 되는 레시피를 얻을 수 있을 뿐만 아니라,
          개인의 선호에 맞춘 태그 검색으로 자신에게 맞는 레시피를 찾을 수
          있습니다.
        </div>
      </section>

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
