import React from 'react'
// import { getMyRecipes } from '../../actions/myRecipes'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyRecipes = props => {
    
    // useEffect(() => {
    //     getMyRecipes()
    // })
    // debugger
    const userRecipes = props.recipes.filter(recipe => {
        // debugger
        return recipe.attributes.user_id == props.currentUser.id
    })
    // debugger
    const recipeCards = userRecipes.length > 0 ? 
        userRecipes.map((r, i) => {
            // debugger
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