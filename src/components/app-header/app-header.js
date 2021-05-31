import React from 'react';
import './app-header.css'

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className="app-header d-flex">
            <h1>To-do App</h1>
            <h2>{allPosts} todos and {liked} of them have been done</h2>
        </div>
    )
}

export default AppHeader;