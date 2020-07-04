import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../../actions/loginForm'
import { login } from '../../actions/currentUser'


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
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" placeholder="Email" value={loginFormData.email} name="email" onChange={handleInputChange} />
            </p>
            <p>
                <input type="password" placeholder="Password" value={loginFormData.password} name="password" onChange={handleInputChange} />
            </p>
            
            <input type="submit" value="Login"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)