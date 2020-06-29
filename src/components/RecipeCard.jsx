import React from 'react'


const RecipeCard = ({ recipe }) => {
    return (
        <p>{recipe.attributes.name}</p>
    )
}

export default RecipeCard