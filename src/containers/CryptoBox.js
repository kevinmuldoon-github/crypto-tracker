import React, { useState, useEffect } from "react";
import CryptoList from "../components/CryptoList";

const CryptoBox = () => {

    // Define useState arrays
    const [cryptos, setCryptos] = useState([]);

    // Create useEffect for using API
    useEffect ( ()  => {
        getCryptos();
    }, []);

    // Fetch crypto information using API URL
    const getCryptos = function () {
        fetch ('https://api.coincap.io/v2/assets')
            .then (response => response.json())
            .then (result => setCryptos (result.data));
    };


    return (

        <>
        <CryptoList cryptos = {cryptos}/>
        </>
    );


};

export default CryptoBox;