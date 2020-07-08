import React from 'react'
import { Link } from 'react-router-dom'


const RecipeCard = ({ recipe }) => {
    return (
        recipe ?
        <div>
            <h4>{recipe.attributes.name}</h4>
            <p>{recipe.attributes.imageUrl}</p>
            <p>{recipe.attributes.description}</p>
            <br />
            <h5>Ingredients</h5>
            {recipe.attributes.ingredients.map((ing, idx) => {
                return (
                    <p key={idx}>
                        {ing.quantity} {ing.unit} {ing.name}
                    </p>
                )
            })}
            <h5>Instructions</h5>
            <p>{recipe.attributes.instructions}</p>
            <Link to={`/recipes/${recipe.id}/edit`}>Edit This Recipe</Link>

        </div> :
        <p>This is a recipe card with no recipe</p>
        
    )
}

export default RecipeCard