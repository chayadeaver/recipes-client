import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getRecipe } from '../actions/myRecipes'


const RecipeCard = ({ recipe, currentUser, getRecipe, match, loggedIn }) => {
    
    useEffect(() => {
        getRecipe(match.params.id)
    })
        if (recipe && loggedIn ){
            const recipeUserId = recipe.relationships.user.data.id
            const currentUserId = currentUser.id

            return (
                <div>
                    <h4>{recipe.attributes.name}</h4>
                    <div className="imageContainer">
                        <img src={recipe.attributes.image_url} alt="_blank"/>
                    </div>
                    <p>{recipe.attributes.description}</p>
                    <br />
                    <h5>Ingredients:</h5>
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
                </div>
            )
            } else if (recipe){
                return (
                    <div>
                        <h4>{recipe.attributes.name}</h4>
                        <div>
                            <img src={recipe.attributes.image_url} alt="_blank"/>
                        </div>
                        <p>{recipe.attributes.description}</p>
                        <br />
                        <h5>Ingredients:</h5>
                        {recipe.attributes.ingredients.map((ing, idx) => {
                            return (
                                <p key={idx}>
                                    {ing.quantity} {ing.unit} {ing.name}
                                </p>
                            )
                        })}
                        <h5>Instructions:</h5>
                        <p>{recipe.attributes.instructions}</p>
                    </div>
            )}
        return <p>This is a recipe card with no recipe</p>
        
    
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser,
        recipe: state.myRecipes.recipe
    }
}

export default connect(mapStateToProps, { getRecipe })(RecipeCard)