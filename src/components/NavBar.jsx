import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
// import Login from './Login'
// import Logout from './sessions/Logout'
import { logout } from '../actions/currentUser'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// import { getCurrentUser } from '../actions/currentUser'

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

const NavBar = ({ currentUser, loggedIn, logout }) => {

    // return (
    //     <div className="NavBar">
    //         <NavLink exact activeClassName="active" to="/">|  Home  |  </NavLink>
    //         <NavLink exact activeClassName="active" to="/myrecipes">|  My Recipes  |  </NavLink>
    //         <NavLink exact activeClassName="active" to="/recipes/new">|  New Recipe  |  </NavLink>
    //         { loggedIn ? <><p id="loggedin">Logged in as {currentUser.attributes.name}</p><Logout /></> : null}
    //     </div>
    // )
    const renderNavbar = () => {
        if (loggedIn) {
            return (
                <>
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/myrecipes">My Recipes</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/recipes/new">New Recipe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link onClick={logout}>Logout</Nav.Link></Nav.Item>
                </>
            )
    } else {
        return (
            <>
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="/signup">Sign Up</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
            </>
        )
        
    }}
    return (
        <Styles>
        <Navbar expand="lg" fixed="top">
            <Navbar.Brand href="/">MyFamilyRecipes</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {renderNavbar()}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
    )
    
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps, { logout })(NavBar)