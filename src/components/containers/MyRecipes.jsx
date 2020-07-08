import React from 'react'
// import { getMyRecipes } from '../../actions/myRecipes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



const MyRecipes = props => {
    const recipeCards = props.recipes.length > 0 ? 
        props.recipes.map((r, i) => (<div key={i}>
            <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>
        </div>
            )) : <p>This is myRecipes with an empty array of recipes</p>
    
    return (
        recipeCards
    )
    
}

const mapStateToProps = state => {
    return {
        recipes: state.myRecipes
    }
}

export default connect(mapStateToProps)(MyRecipes)