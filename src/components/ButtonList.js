import React from "react";

const ButtonList = ({numberOfItems, searchCryptos}) => {

const handleClick = (event) => {
    numberOfItems(event.target.value)
};

const handleSearch = (event) => {
    searchCryptos(event.target.value)
};

    return (
        <div id="buttons">
            <button onClick={handleClick} value="100">View All Cryptocurrencies</button>
            <button onClick={handleClick} value="10">Top 10</button>
            <button onClick={handleClick} value="20">Top 20</button>
            <button onClick={handleClick} value="50">Top 50</button>
            <input onChange={handleSearch} type="search" id="search" name="search" placeholder="Search Cryptocurrencies" />
        </div>
    );

};

export default ButtonList;