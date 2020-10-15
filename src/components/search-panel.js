import React from "react";

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
            disabled={true}
        />
    );
};

export default SearchPanel;