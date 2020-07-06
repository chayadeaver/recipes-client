import React from 'react'
import RecipeCard from '../RecipeCard'
import { connect } from 'react-redux'



const MyRecipes = ({ myRecipes }) => {
    const recipeCards = myRecipes.map(r => <RecipeCard recipe={r} key={r.id} />)
    return (
        recipeCards
    )
}

const mapStateToProps = ({ myRecipes }) => {
    return {
        myRecipes
    }
}

export default connect(mapStateToProps)(MyRecipes)