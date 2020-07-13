import React from "react";


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
        // debugger
        e.preventDefault() 
        this.props.onSubmit(this.state, this.props.recipe.id, this.props.history)
        // this.props.history.replace(`/myrecipes`)
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
            <form onSubmit={this.handleSubmit} >
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

                {
                    ingredients.map((val, idx) => {
                        let ingId = `name-${idx}`, quantityId = `quantity-${idx}`, unitId = `unit-${idx}`

                        return (
                            <div key={idx}>
                                <label htmlFor={ingId}>{`Ingredient #${idx + 1}`}</label>
                                <div className="form-group">
                                    <div className="col-auto">
                                        <input
                                        type="text"
                                        name={ingId}
                                        data-id={idx}
                                        id={ingId}
                                        className="name"
                                        placeholder={"name"}
                                        value={ingredients[idx].name}
                                        onChange={this.handleChange}
                                    />
                                    </div>
                                </div>
                            <div className="form-group">
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        name={quantityId}
                                        data-id={idx}
                                        id={quantityId}
                                        className="quantity"
                                        placeholder={"quantity"}
                                        value={ingredients[idx].quantity}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="col-auto">
                                    <input
                                        type="text"
                                        name={unitId}
                                        data-id={idx}
                                        id={unitId}
                                        className="unit"
                                        placeholder={"unit"}
                                        value={ingredients[idx].unit}
                                        onChange={this.handleChange}
                                    />
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                <p><button className="btn btn-secondary" onClick={this.addIngredient}>Add New Ingredient</button></p>

                <input className="btn btn-primary" type="submit" value={this.props.buttonText} />
                </form>
        )
    }
}


export default RecipeForm