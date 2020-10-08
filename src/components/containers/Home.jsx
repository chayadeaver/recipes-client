import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import SearchBar from '../SearchBar';
import { Card, Button, Form } from 'react-bootstrap'


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
        sortByAlph().map((r, i) => {
            return (
                <>
                    {/* <Link key={r.id} to={`/recipes/${r.id}`}>{r.attributes.name}</Link> */}
                    <Card className="recipe-card" key={i}>
                        <div className="imageContainer">
                        <Card.Img variant="top" src={r.attributes.image_url} />
                        </div>
                        <Card.Body>
                            <Card.Title>{r.attributes.name}</Card.Title>
                            <Card.Text>{r.attributes.description}</Card.Text>
                            <Button variant="primary" href={`/recipes/${r.id}`}>View Recipe</Button>
                        </Card.Body>
                    </Card>
                </>)}) : <p>This is myRecipes with an empty array of recipes</p>

    const toggle = () => {
        setToggled(!toggled)
    }

    return (
    
        <>
            <h4>Browse Recipes</h4>
            <br />
            <SearchBar searchBar={searchBar} location={location}/>
            <Form.Check
            type="switch"
            id="custom-switch"
            label="Sort by Alphabet"
            onClick={toggle}/>
            <div className="recipe-container">
                {recipeCards}
            </div>
            
        </>
    )
}

const mapStateToProps = state => {
    return {
        recipes: state.myRecipes.allRecipes,
        searchResults: state.myRecipes.searchResults
    }
    
}

export default connect(mapStateToProps, null)(Home)
