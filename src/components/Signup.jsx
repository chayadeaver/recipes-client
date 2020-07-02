import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm'
import { signup } from '../actions/currentUser'


const Signup = ({ signupFormData, updateSignupForm, signup, history }) => {
    const handleInputChange = event => {
        const { name, value } = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>
                <input type="text" placeholder="Name" value={signupFormData.name} name="name" onChange={handleInputChange} />
            </p>
            <p>
                <input type="text" placeholder="Email" value={signupFormData.email} name="email" onChange={handleInputChange} />
            </p>
            <p>
                <input type="password" placeholder="Password" value={signupFormData.password} name="password" onChange={handleInputChange} />
            </p>
            <input type="submit" value="Sign Up"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)