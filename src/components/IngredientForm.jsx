import React from 'react'
import { updateNewRecipeForm } from '../actions/newRecipeForm'
import { connect } from 'react-redux'


const IngredientForm = ({ ingredientFormData, updateNewRecipeForm}) => {

    const handleChange = event => {
        const { name, value } = event.target 
        const updatedFormInfo = {
            ...ingredientFormData,
            ingredients[name]: value
        }
        updateNewRecipeForm(updatedFormInfo)
    }

    return (
        <React.Fragment>
            
                <p>
                    <input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={ingredientFormData.ingredients.name}
                        placeholder={"name"}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="quantity"
                        onChange={handleChange}
                        value={ingredientFormData.ingredients.quantity}
                        placeholder={"quantity"}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="unit"
                        onChange={handleChange}
                        value={ingredientFormData.ingredients.unit}
                        placeholder={"unit"}
                    />
                </p>
        </React.Fragment>
    )
} 


const mapStateToProps = state => {
    return {
        ingredientFormData: state.newRecipeForm

    }
}

export default connect(mapStateToProps, { updateNewRecipeForm })(IngredientForm)

