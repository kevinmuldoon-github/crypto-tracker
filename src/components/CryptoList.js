import React from "react";
import CryptoListInfo from "./CryptoListInfo";

const CryptoList = ({cryptos, searchTerm}) => {

    let results=[];

    if (searchTerm != '') {
        results = cryptos.filter(crypto => 
            (crypto.name.toLowerCase()).includes(searchTerm.toLowerCase()) )
    } else {
        results = cryptos;
    }

    const cryptoItems = results.map ( (crypto, index) => {

        return <CryptoListInfo crypto = {crypto} key = {index} />

    });

    return (

        <div>

        <table>
        <thead>
            <tr>
            <th>Rank</th>
            <th>Cryptocurrency</th>
            <th>Ticker</th>
            <th>Supply</th>
            <th>Max Supply</th>
            <th>Marketcap</th>
            <th>24 Hour Volume</th>
            <th>Current Price</th>
            <th>% Change (24 Hours)</th>
            <th>Average Price (24 Hours)</th>
            <th>Explorer</th>
            </tr>
        </thead>
        <tbody>
        {cryptoItems}
        </tbody>
        </table>

        </div>

    ); 



};

export default CryptoList;