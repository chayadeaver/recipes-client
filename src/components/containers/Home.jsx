import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBar from '../SearchBar';

const Home = ({ recipes, searchResults, searchBar, location }) => {
    const [ toggled, setToggled ] = useState(false)

    const getRecipes = () => {
        // let { recipes } = props
        if (searchResults !== undefined && searchResults.length > 0) {
            recipes = searchResults
            return recipes
        } else {
            return recipes
        }
    }

    const sortByAlph = () => {
        if (toggled) {
            return getRecipes().slice().sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
        } else {
            return getRecipes()
        }
    }

    const recipeCards = sortByAlph().length > 0 ? 
        sortByAlph().map((r, i) => (<div key={i}>
            <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link>
        </div>)) : <p>This is myRecipes with an empty array of recipes</p>

    const toggle = () => {
        setToggled(!toggled)
    }

    return (
    
        <div>
            <h4>Browse Recipes</h4>
            <br />
            <SearchBar searchBar={searchBar} location={location}/>
            <button onClick={toggle}>Sort Me</button>
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
