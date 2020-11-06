import React from 'react'
import { connect } from 'react-redux'
import { Card, Button } from "react-bootstrap"
// import SearchBar from '../SearchBar';

const MyRecipes = ({ recipes, currentUser, searchBar, location }) => {
    
    const userRecipes = recipes.filter(recipe => {
        return recipe.attributes.user_id === parseInt(currentUser.id)
    })
    const recipeCards = userRecipes.length > 0 ? 
        userRecipes.map((r, i) => {
            return (
                <React.Fragment key={i}>
                    <Card className="recipe-card" >
                        <div className="imageContainer">
                        <Card.Img variant="top" src={r.attributes.image_url} />
                        </div>
                        
                <Card.Body>
                    <Card.Title>{r.attributes.name}</Card.Title>
                    <Card.Text>{r.attributes.description}</Card.Text>
                    <Button variant="primary" href={`/recipes/${r.id}`}>View Recipe</Button>
                </Card.Body>
            </Card>
                </React.Fragment>
            )}): <p>You don't have any recipes yet. Create one<Button variant="primary" href="/recipes/new" size="sm">Here</Button></p>
    
    return (
        <>
            {/* <SearchBar searchBar={searchBar} location={location}/> */}
            <div className="recipe-container">
                    {recipeCards}
            </div>
        </>
    )
    
}

const mapStateToProps = ({ myRecipes, currentUser }) => {
    return {
        recipes: myRecipes.allRecipes,
        currentUser
    }
}

export default connect(mapStateToProps)(MyRecipes)