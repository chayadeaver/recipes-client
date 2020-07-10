import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../../actions/signupForm'
import { signup } from '../../actions/currentUser'


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
        <div>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-auto">
                        <input autoFocus type="text" placeholder="Name" value={signupFormData.name} name="name" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <input type="text" placeholder="Email" value={signupFormData.email} name="email" onChange={handleInputChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <input type="password" placeholder="Password" value={signupFormData.password} name="password" onChange={handleInputChange} />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)