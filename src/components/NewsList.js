import React from "react";
import NewsListArticle from "./NewsListArticle";

const NewsList = ({news}) => {

    const newsItems = news.map ( (article, index) => {

        return <NewsListArticle article = {article} key = {index} />

    });

    return (
        <div id="article-box">
            {newsItems}
        </div>

    );

};

export default NewsList;