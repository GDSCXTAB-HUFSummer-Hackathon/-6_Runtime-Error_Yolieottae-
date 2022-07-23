import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header>
        <ul className="menu-bar">
          <li className="home-button-div">
            <Link to="/">
              <button className="home-button">
                <span>요</span>리 <span>어</span>때<span>?</span>
              </button>
            </Link>
          </li>
          <li className="bar-div">
            <Link to="/recipes-search">
              <button className="recipe-button">레시피</button>
            </Link>
          </li>
          <li className="bar-div">
            <Link to="/recommend">
              <button className="recommend-button">추천</button>
            </Link>
          </li>
          <li className="bar-div">
            <Link to="/trend">
              <button className="trend-button">트랜드</button>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
