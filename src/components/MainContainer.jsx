import React from 'react'
import { Jumbotron} from './Jumbotron'
import { Layout } from './Layout'
import MyRecipes from './MyRecipes'

const MainContainer = () => {
    return (
        <div className="MainContainer">
            <Jumbotron />
            <Layout />
            <MyRecipes />
        </div>
    )
}

export default MainContainer