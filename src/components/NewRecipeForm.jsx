import React from 'react'
import { updateNewRecipeForm } from '../actions/newRecipeForm'
import { connect } from 'react-redux'

const NewRecipeForm = ({ name, imageUrl, description, instructions, ingredientName, quantity, unit, history }) => {

    const handleChange = event => {
        const { name, value } = event.target 
        updateNewRecipeForm(name, value)
    }

    const handleSubmit = event => {
        event.preventDefault()
    }
    // const handleAddIngredient = () => {
    //     renderIngredients()
    // }

    // const renderIngredients = () => {
    //     return (
    //         <React.Fragment>
    //             <p>
    //                 <input
    //                     type="text"
    //                     name="name"
    //                     onChange={handleChange}
    //                     placeholder={"name"}
    //                 />
    //             </p>
    //             <p>
    //                 <input
    //                     type="text"
    //                     name="quantity"
    //                     onChange={handleChange}
    //                     placeholder={"quantity"}
    //                 />
    //             </p>
    //             <p>
    //                 <input
    //                     type="text"
    //                     name="unit"
    //                     onChange={handleChange}
    //                     placeholder={"unit"}
    //                 />
    //             </p>
    //         </React.Fragment>
    //     )
    // }

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
                    value={name}
                    placeholder={"name"}
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="imageUrl"
                    onChange={handleChange}
                    value={imageUrl}
                    placeholder={"imageUrl"}
                    />
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="4"
                    name="description"
                    onChange={handleChange}
                    value={description}
                    placeholder={"description"}></textarea>
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="8"
                    name="instructions"
                    onChange={handleChange}
                    value={instructions}
                    placeholder={"instructions"}></textarea>
                </p>
                <label>Ingredients</label><br />
                <p>
                    <input
                        type="text"
                        name="ingredientName"
                        onChange={handleChange}
                        value={ingredientName}
                        placeholder={"ingredientName"}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="quantity"
                        onChange={handleChange}
                        value={quantity}
                        placeholder={"quantity"}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="unit"
                        onChange={handleChange}
                        value={unit}
                        placeholder={"unit"}
                    />
                </p>
                <button>Add More Ingredients</button><br />
                <br />
                <input type="submit" value="Create A New Recipe" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    const { name, imageUrl, description, instructions } = state.newRecipeForm
    const { ingredientName, quantity, unit } = state.newRecipeForm.ingredients
    return {
        name,
        imageUrl,
        description,
        instructions,
        ingredients: [
            {
                ingredientName,
                quantity,
                unit
            }
        ]
    }
}

export default connect(mapStateToProps, { updateNewRecipeForm })(NewRecipeForm)