import React, { useEffect } from 'react'
import RecipeCard from '../RecipeCard'
// import { getMyRecipes } from '../../actions/myRecipes'
import { connect } from 'react-redux'



const MyRecipes = ({ myRecipes }) => {
    const recipeCards = myRecipes.map(r => <RecipeCard recipe={r} key={r.id} />)

    // useEffect(() => {
    //     getMyRecipes()
        
    // }, [])
    
    return (
        // myRecipes.length === 0 ? recipeCards : <div><h5>There are no recipes yet</h5></div>
        recipeCards
        )
    
}

const mapStateToProps = ({ myRecipes }) => {
    return {
        myRecipes
    }
}

export default connect(mapStateToProps)(MyRecipes)