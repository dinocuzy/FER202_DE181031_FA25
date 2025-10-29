import { Navbar, Container, Nav, Form, Button, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BiSearch, BiHeart, BiUser, BiLock } from "react-icons/bi";
function WebNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="py-2 shadow-lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-warning">
                    MovieApp
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >Home</NavLink>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >Movies</NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                        >Contact
                        </NavLink>
                        <NavLink
                        to="/about"
                        className={({isActive})=>(isActive ? 'nav-link active' : 'nav-link')}
                        >About
                        </NavLink>

                    </Nav>
                    <Form className="d-flex me-3">
                        <Form.Control type="text" placeholder="Quick search..." size="sm" className="me-2" />
                        <Button variant="warning" size="sm"><BiSearch /></Button>
                    </Form>
                    <Nav>
                        <NavDropdown title={<span><BiUser /> Account</span>} id="account-dropdown">
                            <NavDropdown.Item>Manage Your Profile</NavDropdown.Item>
                            <NavDropdown.Item as={NavLink} to="/account">Build Your Account</NavDropdown.Item>
                            <NavDropdown.Item>Change Password</NavDropdown.Item>
                            <NavDropdown.Item></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link><BiLock />Login</Nav.Link>
                        <Nav.Link><BiHeart />Favourites</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
        ;
}
export default WebNavbar;

