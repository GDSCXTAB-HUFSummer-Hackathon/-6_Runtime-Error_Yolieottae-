import { Link } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      className="navigator"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <button className="home-button">
              <span>요</span>리 <span>어</span>때<span>?</span>
            </button>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/recipes-search">
              <button className="recipe-button ms-5 me-5">레시피</button>
            </Link>

            <Link to="/recommand">
              <button className="recommand-button ms-5 me-5">추천</button>
            </Link>
            <Link to="/trend">
              <button className="trend-button ms-5 me-5">트랜드</button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
