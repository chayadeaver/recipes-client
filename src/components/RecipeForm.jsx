import React from "react";
import IngredientInputs from "./IngredientsInput";


class RecipeForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
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
    }

    handleChange = e => {
        if (["name", "quantity", "unit"].includes(e.target.className) ) {
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({ ingredients }, () => console.log(this.state.ingredients))
        } else {
            this.setState({ [e.target.name]: e.target.value })
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
        const id = this.props.recipe ? this.props.recipe.id : null // checks to see if theres an id and assigns null if not
        this.props.onSubmit(this.state, this.props.history, id)
    }

    componentDidMount() {
        if (this.props.recipe) {
            const { attributes } = this.props.recipe
            this.setState({
                name: attributes.name,
                imageUrl: attributes.image_url,
                description: attributes.description,
                instructions: attributes.instructions,
                ingredients: attributes.ingredients
            })
        }
    }


    render() {
        let { name, imageUrl, description, instructions, ingredients } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
            <label>Recipe</label><br />
                <div className="form-group">
                    <div className="col-auto">
                        <input
                        autoFocus
                        type="text"
                        name="name"
                        id="name"
                        placeholder={"name"}
                        onChange={this.handleChange}
                        value={name}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <input
                        type="text"
                        name="imageUrl"
                        id="imageUrl"
                        placeholder={"imageUrl"}
                        onChange={this.handleChange}
                        value={imageUrl}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <textarea 
                        cols="50" 
                        rows="4"
                        name="description"
                        id="description"
                        placeholder={"description"}
                        onChange={this.handleChange}
                        value={description}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-auto">
                        <textarea 
                        cols="50" 
                        rows="8"
                        name="instructions"
                        id="instructions"
                        placeholder={"instructions"}
                        onChange={this.handleChange}
                        value={instructions}></textarea>
                    </div>
                </div>

                    <IngredientInputs ingredients={ingredients} handleChange={this.handleChange}/>
                <p><button className="btn btn-secondary" onClick={this.addIngredient}>Add New Ingredient</button></p>

                <input className="btn btn-primary" type="submit" value={this.props.buttonText} />
                </form>
        )
    }
}


export default RecipeForm