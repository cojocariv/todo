import React from "react";
import ReactDom from 'react-dom';

const TodoList = () => {

    const items = ['Learn React', 'Build awesome app'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1>My todo list</h1>
    );
};

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };

    return (
        <input
            style={searchStyle}
            type="text"
            placeholder={searchText}
            className='sad'
            disabled = {true}
        />
    );
};

const App = () => {

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList/>
        </div>
    );
};

ReactDom.render(<App/>, document.getElementById('root'));