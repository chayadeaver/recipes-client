import React from 'react'
import RecipeCard from './RecipeCard'
import { connect } from 'react-redux'



const MyRecipes = (props) => {
    const recipeCards = props.recipes.map(r => <RecipeCard recipe={r} key={r.id} />)
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