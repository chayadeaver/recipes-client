export const devEndpoints =
{
    baseURL: "http://localhost:3001/api/v1",
    _login: `http://localhost:3001/api/v1/login`,
    _signup: `http://localhost:3001/api/v1/signup`,
    _logout: `http://localhost:3001/api/v1/logout`,
    loggedIn: `http://localhost:3001/api/v1/get_current_user`,
    _allRecipes: `http://localhost:3001/api/v1/recipes`,
    _recipe: (recipeId) => `http://localhost:3001/api/v1/recipes/${recipeId}`,

}

export const prodEndpoints = {
    baseURL: "https://my-family-recipes-api.herokuapp.com/api/v1",
    login_: `https://my-family-recipes-api.herokuapp.com/api/v1/login`,
    signup_: `https://my-family-recipes-api.herokuapp.com/api/v1/signup`,
    logout_: `https://my-family-recipes-api.herokuapp.com/api/v1/logout`,
    loggedIn_: `https://my-family-recipes-api.herokuapp.com/api/v1/get_current_user`,
    allRecipes_: `https://my-family-recipes-api.herokuapp.com/api/v1/recipes`,
    recipe_: (recipeId) => `https://my-family-recipes-api.herokuapp.com/api/v1/recipes/${recipeId}`,
}