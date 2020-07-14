import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyRecipes = props => {
    const userRecipes = props.recipes.filter(recipe => {
        return recipe.attributes.user_id == props.currentUser.id
    })
    const recipeCards = userRecipes.length > 0 ? 
        userRecipes.map((r, i) => {
            return (
                <div key={i}>
                    <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>
                </div>
            )}): <p>This is myRecipes with an empty array of recipes</p>
    
    return (
        recipeCards
    )
    
}

const mapStateToProps = ({ myRecipes, currentUser }) => {
    return {
        recipes: myRecipes.allRecipes,
        currentUser
    }
}

export default connect(mapStateToProps)(MyRecipes)