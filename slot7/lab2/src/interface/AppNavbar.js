import { Navbar, Container, Nav } from "react-bootstrap";
function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" >
            <Container style={{maxWidth:"80%"}}>
                <Navbar.Brand href="#">🍕 Pizza Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About us</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                    <form className="d-flex">
                        <input className="form-control" style={{width:"300px"}} type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-danger" type="submit">🔍</button>
                    </form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AppNavbar;