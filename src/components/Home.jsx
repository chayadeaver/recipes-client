import React from 'react'
// import Login from './Login'
// import Signup from './Signup'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBar from './SearchBar';

const Home = props => {
    const getRecipes = () => {
        let { recipes } = props
        if (props.searchResults !== undefined && props.searchResults.length > 0) {
            recipes = props.searchResults
            return recipes
        } else {
            return recipes
        }
    }
    const recipeCards = getRecipes().length > 0 ? 
        getRecipes().map((r, i) => (<div key={i}>
            <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>
        </div>)) : <p>This is myRecipes with an empty array of recipes</p>

    return (
    
        <div>
            <h4>Browse Recipes</h4>
            <br />
            <SearchBar searchBar={props.searchBar} location={props.location}/>
            {recipeCards}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.myRecipes.allRecipes,
        searchResults: state.myRecipes.searchResults
    }
    
}

export default connect(mapStateToProps, null)(Home)
