import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import ArticlesList from '../components/Article/ArticlesList'
const Blog = () => {
    return (
        <>
            <NavBar />
            <h1>Blog</h1>
            <ArticlesList />
        </>
    )
}

export default Blog