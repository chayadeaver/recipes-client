import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllRecipeSearchResults } from '../reducers/myRecipes'
import { Button, Form } from 'react-bootstrap';


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
            <Form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                <input autoFocus onChange={handleChange} type="search" id="searchBar" placeholder="Search Recipe Name" />
                <Button type="submit" variant="success" size="sm">Search</Button>
                </div>
            </Form>
        </div>
    )
}

export default SearchBar
