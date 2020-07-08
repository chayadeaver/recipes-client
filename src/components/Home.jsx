import React from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const Home = props => {
    const recipeCards = props.recipes.length > 0 ? 
        props.recipes.map((r, i) => (<div key={i}>
            <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>
        </div>
            )) : <p>This is myRecipes with an empty array of recipes</p>

    return (
    
        <div>
            <h4>Browse Recipes</h4>
            <br />
            {recipeCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.myRecipes.allRecipes
    }
    
}

export default connect(mapStateToProps, null)(Home)
