import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import styled from 'styled-components'
import { logout } from '../redux/actions/currentUser'
import { connect } from 'react-redux'

const Styles = styled.div`
    .navbar {
        background-color: #222;
        opacity: 0.80;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover {
            color: white;
        }
    }
`;

const NavBar = (props) => {
    const logoutRedirect = () => {
        props.logout()
        alert("You have successfully logged out. Have a nice day!")
        props.history.push('/')
    }
    
    const renderNavbar = () => {
        // debugger
        if (props.loggedIn) {
            return (
                <>
                <Nav.Item><Nav.Link href="/myrecipes">Hi, {props.currentUser.user.attributes?.name}</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link>|</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/myrecipes">My Recipes</Nav.Link></Nav.Item> 
                <Nav.Item><Nav.Link href="/recipes/new">New Recipe</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link onClick={logoutRedirect}>Logout</Nav.Link></Nav.Item>
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

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser
    }
}

export default connect(mapStateToProps, { logout })(NavBar)