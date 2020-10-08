import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllRecipeSearchResults } from '../reducers/myRecipes'
import { Button } from 'react-bootstrap';


const SearchBar = props => {
    const [ query, setQuery ] = useState("")
    const dispatch = useDispatch()
    const allRecipes = useSelector(state => state.myRecipes.allRecipes)
    const handleChange = e => {
        setQuery(e.target.value)
        dispatch(getAllRecipeSearchResults(query, allRecipes)) 

    }

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                <input autoFocus onChange={handleChange} type="search" id="searchBar" placeholder="Search" />
                <Button type="submit" variant="success">Search</Button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
