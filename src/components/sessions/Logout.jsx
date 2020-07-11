import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../actions/currentUser'
import { withRouter } from 'react-router-dom'


const Logout = ({ logout, history }) => {

    return (
        <form onSubmit={(event) => {
                event.preventDefault()
                logout()
                history.push('/')
            }
        }>
            <button type="submit" className="btn btn-primary btn-sm">Logout</button>
        </form>
    )
}


export default withRouter(connect(null, { logout })(Logout))