import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../redux/actions/loginForm'
import { login } from '../../redux/actions/currentUser'
import { Link } from 'react-router-dom'


const Login = ({ loginFormData, updateLoginForm, login, history }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }

    return (
        <div>
            <p>Not a member? Create an account <Link to="/signup">here</Link></p>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-auto">
                        <input autoFocus type="text" placeholder="Email" value={loginFormData.email} name="email" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <input type="password" placeholder="Password" value={loginFormData.password} name="password" onChange={handleInputChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)