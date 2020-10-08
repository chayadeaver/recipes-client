import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button } from "react-bootstrap"

const MyRecipes = ({ recipes, currentUser }) => {
    const userRecipes = recipes.filter(recipe => {
        return recipe.attributes.user_id == currentUser.id
    })
    const recipeCards = userRecipes.length > 0 ? 
        userRecipes.map((r, i) => {
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
                </>
            )}): <p>This is myRecipes with an empty array of recipes</p>
    
    return (
        <div className="recipe-container">
                {recipeCards}
        </div>
        
    )
    
}

const mapStateToProps = ({ myRecipes, currentUser }) => {
    return {
        recipes: myRecipes.allRecipes,
        currentUser
    }
}

export default connect(mapStateToProps)(MyRecipes)