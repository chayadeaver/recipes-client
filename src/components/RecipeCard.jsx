import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getRecipe } from '../redux/actions/myRecipes'
import { Button } from 'react-bootstrap'


const RecipeCard = ({ recipe, currentUser, getRecipe, match, loggedIn }) => {
    
    useEffect(() => {
        getRecipe(match.params.id)
    })
        if (recipe && loggedIn ){
            const recipeUserId = recipe.relationships.user.data.id
            const currentUserId = currentUser.id

            return (
                <div className="recipe-info">
                    <h4>{recipe.attributes.name}</h4>
                    <div className="imageContainer">
                        <img src={recipe.attributes.image_url} alt="_blank"/>
                    </div>
                    <p>{recipe.attributes.description}</p>
                    <br />
                    <h5>Ingredients:</h5>
                    <br />
                    {recipe.attributes.ingredients.map((ing, idx) => {
                        return (
                            <p key={idx}>
                                {ing.quantity} {ing.unit} {ing.name}
                            </p>
                        )
                    })}
                    <h5>Instructions:</h5>
                    <p>{recipe.attributes.instructions}</p>
                    {recipeUserId === currentUserId ? <Button href={`/recipes/${recipe.id}/edit`}>Edit This Recipe</Button> : null}
                </div>
            )
            } else if (recipe){
                return (
                    <div className="recipe-info">
                        <h4>{recipe.attributes.name}</h4>
                        <div className="imageContainer">
                            <img src={recipe.attributes.image_url} alt="_blank"/>
                        </div>
                        <p>{recipe.attributes.description}</p>
                        <br />
                        <h5>Ingredients:</h5>
                        <br />
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