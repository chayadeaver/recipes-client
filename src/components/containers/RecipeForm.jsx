import React from "react";
import { connect } from 'react-redux'
import { createRecipe } from '../../actions/myRecipes'

class RecipeForm extends React.Component {

    state = {
        name: "",
        imageUrl: "",
        description: "",
        instructions: "",
        ingredients: [
            {
                name: "",
                quantity: "",
                unit: ""
            }
        ]
        
    }

    handleChange = e => {
        if (["name", "quantity", "unit"].includes(e.target.className) ) {
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id][e.target.className] = e.target.value.toUpperCase()
            this.setState({ ingredients }, () => console.log(this.state.ingredients))
        } else {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() })
        }
    }

    addIngredient = e => {
        e.preventDefault()
        this.setState((prevState) => ({
            ingredients: [...prevState.ingredients, {name: "", quantity: "", unit: ""}],
        }))
    }

    handleSubmit = e => { 
        e.preventDefault() 
        this.props.createRecipe(this.state)
    }

    render() {

        let { ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit} >
            <label>Recipe</label><br />
                <p>
                    <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder={"recipe name"}
                    onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    placeholder={"imageUrl"}
                    onChange={this.handleChange}
                    />
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="4"
                    name="description"
                    id="description"
                    placeholder={"description"}
                    onChange={this.handleChange}></textarea>
                </p>
                <p>
                    <textarea 
                    cols="50" 
                    rows="8"
                    name="instructions"
                    id="instructions"
                    placeholder={"instructions"}
                    onChange={this.handleChange}></textarea>
                </p>

                {
                    ingredients.map((val, idx) => {
                        let ingId = `name-${idx}`, quantityId = `quantity-${idx}`, unitId = `unit-${idx}`

                        return (

                            <div key={idx}>
                                <label htmlFor={ingId}>{`Ingredient #${idx + 1}`}</label>
                                <p>
                                <input
                                    type="text"
                                    name={ingId}
                                    data-id={idx}
                                    id={ingId}
                                    className="name"
                                    placeholder={"name"}
                                    onChange={this.handleChange}
                                />
                                </p>
                                <p>
                                <input
                                    type="text"
                                    name={quantityId}
                                    data-id={idx}
                                    id={quantityId}
                                    className="quantity"
                                    placeholder={"quantity"}
                                    onChange={this.handleChange}
                                />
                                </p>
                                <p>
                                <input
                                    type="text"
                                    name={unitId}
                                    data-id={idx}
                                    id={unitId}
                                    className="unit"
                                    placeholder={"unit"}
                                    onChange={this.handleChange}
                                />
                                </p>

                            </div>
                        )
                    })
                }
                <p><button onClick={this.addIngredient}>Add New Ingredient</button></p>

                <input type="submit" value="Create A New Recipe" />
                </form>
        )
    }
}

export default connect(null, { createRecipe })(RecipeForm)