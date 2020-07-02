// synchronous actions

export const updateNewRecipeForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_NEW_RECIPE_FORM",
        formData: { name, value }
    }
}