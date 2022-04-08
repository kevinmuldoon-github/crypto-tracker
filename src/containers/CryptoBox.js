import React, { useState, useEffect } from "react";
import ButtonList from "../components/ButtonList";
import CryptoList from "../components/CryptoList";

const CryptoBox = () => {

    // Define useState arrays
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Create useEffect for using API
    useEffect ( ()  => {
        getCryptos();
    }, []);

    // Fetch crypto information using API URL
    const getCryptos = function (items=100) { // Fetch 100 items by default
        fetch ('https://api.coincap.io/v2/assets')
            .then (response => response.json())
            .then (result => setCryptos (result.data.slice(0,items)));
    };

    // Function to change the number of cryptocurrencies displayed
    const numberOfItems = (numItems) => {
            getCryptos(numItems);
    };

    const searchCryptos = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (

        <>
        <ButtonList numberOfItems = {numberOfItems} searchCryptos = {searchCryptos} />
        <CryptoList cryptos = {cryptos} searchTerm={searchTerm}/>
        </>
    );


};

export default CryptoBox;