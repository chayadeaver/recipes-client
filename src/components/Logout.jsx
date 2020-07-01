import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'


const Logout = ({ logout }) => {

    const handleLogout = () => {
        logout()
    }

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}


export default connect(null, { logout })(Logout)