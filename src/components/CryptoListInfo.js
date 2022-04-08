import React from "react";

const CryptoListInfo = ({crypto}) => {

    let maxSupply;
    let positiveChange;
    if (crypto.maxSupply != null) {
        maxSupply = parseInt(crypto.maxSupply).toLocaleString("en-US"); // Remove decimals from max supply
    } else {
        maxSupply = "N/A";
    }

    // Formatting numerical data
    const cryptoPriceBefore = parseFloat(crypto.priceUsd).toFixed(2); // Trim crypto price to two decimal places
    const cryptoPrice = parseFloat(cryptoPriceBefore).toLocaleString("en-US"); // Separate large numbers using commas
    const cryptoSupply = parseInt(crypto.supply).toLocaleString("en-US"); // Remove decimals from crypto supply

    const marketCap = parseInt(crypto.marketCapUsd).toLocaleString("en-US"); // Remove decimals from market camp
    const dailyVolume = parseInt(crypto.volumeUsd24Hr).toLocaleString("en-US"); // Remove decimals from 24 hour volume
    const changePercent = parseFloat(crypto.changePercent24Hr).toFixed(2);
    const averagePrice = parseInt(crypto.vwap24Hr).toLocaleString("en-US"); // Remove decimals from 24 hour average price

    if (changePercent>= 0) {
        positiveChange = true;
    } else {
        positiveChange = false;
    }

    return (
        <>
        <tr>
            <td className="highlight-cell">{crypto.rank}</td>
            <td>{crypto.name}</td>
            <td>{crypto.symbol}</td>
            <td>{cryptoSupply}</td>
            <td>{maxSupply}</td>
            <td>${marketCap}</td>
            <td>${dailyVolume}</td>
            <td>${cryptoPrice}</td>
            {positiveChange ? <td className="green">{changePercent}%</td>: <td className="red">{changePercent}%</td>}
            <td>${averagePrice}</td>
            <td><a href={crypto.explorer} target="_blank">Visit</a></td>
        </tr>
        </>

        
    );

};

export default CryptoListInfo;
