import React from 'react'
// import { Nav, Navbar} from 'react-bootstrap'
// import styled from 'styled-components'
// import Login from './Login'
import Logout from './Logout'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

// import { getCurrentUser } from '../actions/currentUser'

// const Styles = styled.div`
//     .navbar {
//         background-color: #222;
//     }
//     .navbar-brand, .navbar-nav .nav-link {
//         color: #bbb;

//         &:hover {
//             color: white;
//         }
//     }
// `;

const NavBar = ({ currentUser, loggedIn }) => {

    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/myrecipes">|  My Recipes  |  </NavLink>
            <NavLink exact activeClassName="active" to="/recipes/new">|  New Recipe  |  </NavLink>
            { loggedIn ? <Logout /> : null}
        </div>
    )
    // <Styles>
    //     <Navbar expand="lg" fixed="top">
    //         <Navbar.Brand href="/">MyFamilyRecipes</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //             <Nav className="ml-auto">
    //                 <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
    //                 <Nav.Item><Nav.Link href="/logout">Logout</Nav.Link></Nav.Item> : <Nav.Item><Nav.Link href="/login">Login</Nav.Link></Nav.Item>
    //             </Nav>
    //         </Navbar.Collapse>
    //     </Navbar>
    // </Styles>
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)