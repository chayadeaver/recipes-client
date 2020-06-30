import React from 'react'
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom'



const Home = () => {
    return (
        <div>
            <h2>Browse Recipes</h2>
            <h4>To add recipes, please <Link to="/signup">Sign Up</Link> or <Link to="/login">Log In</Link></h4>
        </div>
    )
}

export default Home
