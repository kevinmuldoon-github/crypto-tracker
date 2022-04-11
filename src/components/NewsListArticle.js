import React from "react";

const NewsListArticle = ({article}) => {


    return (
        <div className="article-item">

        <div className=".image-description">
                <a href={article.link} target='_blank'><img src={article.imgURL} width='100'/></a>
                <h2><a href={article.link}  target='_blank'>{article.title}</a></h2>
        </div>

        <p><strong>Source</strong>: {article.source}</p>

        </div>
    );

};

export default NewsListArticle;

