import React from 'react'
// We first grab the action creator
import { updateNewRecipeForm, addIngredient } from '../../actions/newRecipeForm'
import { createRecipe } from '../../actions/myRecipes'
// import { addIngredient } from '../../actions/myIngredients'
import IngredientForm from '../IngredientForm'
import { connect } from 'react-redux'


// 3. This means Redux gives us back a prop called updateNewRecipeForm
// which when invoked, actually Redux  wil now dispatch
const NewRecipeForm = ({ recipeFormData, ingredientFormData, history, updateNewRecipeForm, createRecipe, addIngredient, userId }) => {
    
    
    const handleChange = event => {
        const { name, value } = event.target 
        console.log(recipeFormData)
        const updatedFormInfo = {
            ...recipeFormData,
            [name]: value
        }
        // 4. This is not an invocation of just the action creator,
        // it's not Redux dispatching the action built by the action's 
        // creator with the appropriate arguments
        updateNewRecipeForm(updatedFormInfo)
    }


    const handleSubmit = event => {
        event.preventDefault()
        createRecipe(recipeFormData)
        // createIngredients(ingredientFormData)
    }

    const renderIngredientFields = event => {
        event.preventDefault()
        addIngredient()
    }
    

    return (
        <div>
            <h4>Create A New Recipe</h4>
            <br />
            <form onSubmit={handleSubmit}>
            <label>Recipe</label><br />
                <p>
                    <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    value={recipeFormData.name}
                    placeholder={"name"}
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    value={recipeFormData.imageUrl}
                    placeholder={"imageUrl"}
                    />
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="4"
                    name="description"
                    onChange={handleChange}
                    value={recipeFormData.description}
                    placeholder={"description"}></textarea>
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="8"
                    name="instructions"
                    onChange={handleChange}
                    value={recipeFormData.instructions}
                    placeholder={"instructions"}></textarea>
                </p>
                <label>Ingredients</label><br />
                {recipeFormData.ingredients.map(({ name, quantity, unit}, index) => {
                    return <IngredientForm key={index} name={name} quantity={quantity} unit={unit}/>
                })}
                <button onClick={renderIngredientFields}>Add Another Ingredient</button>
                <br />
                <input type="submit" value="Create A New Recipe" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    // const userId =  state.currentUser ? state.currentUser.id : ""
    return {
        recipeFormData: state.newRecipeForm,
        ingredientFormData: state.ingredientForm,

        // userId

    }
}

// 2. We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below
export default connect(mapStateToProps, { updateNewRecipeForm, createRecipe, addIngredient })(NewRecipeForm)