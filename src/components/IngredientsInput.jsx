import React from 'react'

const IngredientInputs = ({ ingredients, handleChange }) => {
    return (
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
                            onChange={handleChange}
                            value={ingredients[idx].name}
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
                            onChange={handleChange}
                            value={ingredients[idx].quantity}
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
                            onChange={handleChange}
                            value={ingredients[idx].unit}
                        />
                    </div>
                </div>
            </div>
            )
        })
    )
}

export default IngredientInputs