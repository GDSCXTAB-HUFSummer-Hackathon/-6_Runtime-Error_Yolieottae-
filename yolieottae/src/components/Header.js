import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <ul class="menu-bar">
          <li class="home-button-div">
            <Link to="/">
              <button class="home-button">
                <span>요</span>리 <span>어</span>때<span>?</span>
              </button>
            </Link>
          </li>
          <li class="bar-div">
            <Link to="/recipe">
              <button class="recipe-button">레시피</button>
            </Link>
          </li>
          <li class="bar-div">
            <Link to="/recommand">
              <button class="recommand-button">추천</button>
            </Link>
          </li>
          <li class="bar-div">
            <Link to="/trend">
              <button class="trend-button">트랜드</button>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
