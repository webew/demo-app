import React, { useEffect, useState } from 'react'
import Article from './Article';

const ArticlesList = () => {

    const [articles, setArticles] = useState(null);

    useEffect(() => {
        console.log('useEffect');
        const fetchDatas = async () => {
            const response = await fetch('http://localhost:3000/data/articles.json');
            const articlesList = await response.json();
            setArticles(articlesList);
        }
        fetchDatas();
    }, [])

    console.log(articles);
    return (
        <>
            <h1>ArticlesList</h1>
            <section>
                {
                    articles && articles.map((article) => {
                        return <Article key={article.id} titre={article.titre} contenu={article.contenu} />
                    })
                }
            </section>
        </>
    )
}

export default ArticlesList