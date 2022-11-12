import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


function NavBar() {
  return (
    <Navbar bg="warning" expand="lg">
      <Container>
        <Navbar.Brand href="/home">
          <img
                src="https://th.bing.com/th/id/R.9267117c867a3b4ec8d8a32d80b5fa10?rik=HF0BC%2bLXNd2HGQ&riu=http%3a%2f%2fwww.rickybruner.com%2fimg%2fresumelogos%2freactstrap.png&ehk=78aAn0YqeuT7dpCKkOiNp7bzYLCEghQajN0ruPwIXvg%3d&risl=&pid=ImgRaw&r=0"
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="">Fullstack Integration Activity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/users-page">Users Page</Nav.Link>
            <Nav.Link href="/items-page">Items Page</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
