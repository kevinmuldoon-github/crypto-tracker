import React, { useState, useEffect } from "react";
import ButtonList from "../components/ButtonList";
import CryptoList from "../components/CryptoList";
import NewsList from "../components/NewsList";


const CryptoBox = () => {

    // Define useState arrays
    const [cryptos, setCryptos] = useState([]);
    const [news, setNews] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Create useEffect for using API
    useEffect ( ()  => {
        getCryptos();
        getNews();
    }, []);

    // Fetch crypto information using API URL
    const getCryptos = function (items=100) { // Fetch 100 items by default
        fetch ('https://api.coincap.io/v2/assets')
            .then (response => response.json())
            .then (result => setCryptos (result.data.slice(0,items)));
    };

    // Fetch crypto news articles from CoinStats
    const getNews = function () {
        fetch('https://api.coinstats.app/public/v1/news/handpicked?skip=0&limit=20')
            .then (response => response.json())
            .then (result => setNews(result.news))

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
        <NewsList news = {news} />
        <ButtonList numberOfItems = {numberOfItems} searchCryptos = {searchCryptos} />
        
        </>
    );


};

export default CryptoBox;