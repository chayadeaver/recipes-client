import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


const RecipeCard = ({ recipe, currentUser }) => {
    
    const recipeUserId = recipe.relationships.user.data.id
    const currentUserId = currentUser.id
    return (
        recipe ?
        <div>
            <h4>{recipe.attributes.name}</h4>
            <p>{recipe.attributes.imageUrl}</p>
            <p>{recipe.attributes.description}</p>
            <br />
            <h5>Ingredients:</h5>
            {console.log(recipe)}
            {recipe.attributes.ingredients.map((ing, idx) => {
                return (
                    <p key={idx}>
                        {ing.quantity} {ing.unit} {ing.name}
                    </p>
                )
            })}
            <h5>Instructions:</h5>
            <p>{recipe.attributes.instructions}</p>
            {recipeUserId === currentUserId ? <Link to={`/recipes/${recipe.id}/edit`}>Edit This Recipe</Link> : null}
            

        </div> :
        <p>This is a recipe card with no recipe</p>
        
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, null)(RecipeCard)