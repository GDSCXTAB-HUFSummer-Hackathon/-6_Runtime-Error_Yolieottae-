function Header() {
  return (
    <header>
      <ul class="menu-bar">
        <li class="home-button-div">
          <button class="home-button">
            <span>요</span>리 <span>어</span>때<span>?</span>
          </button>
        </li>
        <li class="bar-div">
          <button class="recipe-button">레시피</button>
        </li>
        <li class="bar-div">
          <button class="recommend-button">추천</button>
        </li>
        <li class="bar-div">
          <button class="trend-button">트랜드</button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
