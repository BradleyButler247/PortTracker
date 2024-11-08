import { Navbar, NavItem, NavLink, Nav } from 'reactstrap';
import default_pfp from '../images/default_pfp.png';
import '../components/NavBar.css';


const NavBar = ({ currUser, logout }) => {
    return (
        currUser.username !== '' ? (            
            <Navbar expand="xs">
                <Nav className="mr-auto" navbar>
                    <NavItem className='d-flex align-items-center justify-content-center'>
                        <NavLink href={`/User/${currUser.username}`} id='pfp-link' className='mx-auto py-0'>                    
                            <img src={currUser.pfp === '' ? default_pfp : currUser.pfp} 
                                 alt={`${currUser.username} profile picture`}
                                 className='navbar-img mx-auto p-0'
                                 style={{ borderRadius: '50%', width: '2.5rem' }}
                            />
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Crypto/Browse">Tokens</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Crypto/Categories">Categories</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem >
                        <NavLink href="/" onClick={logout}>Logout</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        ) : (
            <Navbar expand="xs">
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink href="/Crypto/Browse">Tokens</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/Crypto/Categories">Categories</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem >
                        <NavLink href="/Login">Login</NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink href="/Signup">Signup</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    )
}


export default NavBar