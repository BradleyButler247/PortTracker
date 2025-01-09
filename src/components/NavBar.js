import { Navbar, NavItem, NavLink, Nav } from 'reactstrap';
import '../components/NavBar.css';


const NavBar = ({ currUser, logout }) => {
    return (
        currUser.username !== '' ? (            
            <Navbar expand="xs" className='main'>
                <Nav className="main mr-auto" navbar>
                    <NavItem className='main d-flex align-items-center justify-content-center'>
                        <NavLink className='main' href={`/User/${currUser.username}`}>Home</NavLink>
                    </NavItem>
                    <NavItem className='main'>
                        <NavLink className='main' href="/Crypto/Browse">Tokens</NavLink>
                    </NavItem>
                    <NavItem className='main'>
                        <NavLink className='main' href="/Crypto/Categories">Categories</NavLink>
                    </NavItem>
                </Nav>
                
                <Nav className="main ml-auto" navbar>
                    <NavItem className='main'>
                        <NavLink className='main' href="/" onClick={logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        ) : (
            <Navbar expand="xs" className='main'>
                <Nav className="main mr-auto" navbar>
                    <NavItem className='main'>
                        <NavLink className='main' href="/Crypto/Browse">Tokens</NavLink>
                    </NavItem>
                    <NavItem className='main'>
                        <NavLink className='main' href="/Crypto/Categories">Categories</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="main ml-auto" navbar>
                    <NavItem>
                        <NavLink className='main' href="/Login">Login</NavLink>
                    </NavItem>
                    <NavItem className='main'>
                        <NavLink className='main' href="/Signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    )
}


export default NavBar