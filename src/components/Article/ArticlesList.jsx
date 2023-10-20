import React, { useEffect, useState } from 'react'
import Article from './Article'

const articles = [
    {
        id: 1,
        titre: "Article 1",
        contenu: "Contenu de l'article 1"
    },
    {
        id: 2,
        titre: "Article 2",
        contenu: "Contenu de l'article 2"
    },
    {
        id: 3,
        titre: "Article 3",
        contenu: "Contenu de l'article 3"
    },
];

const ArticlesList = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/data/articles.json")
            .then((response) => response.json())
            .then(data => setArticles(data))
    }, []) // [] pour que useEffect ne s'exécute qu'une seule fois au chargement du composant

    return (
        <>
            {
                articles.map((article) => {
                    return <Article key={article.id} titre={article.titre} contenu={article.contenu} />
                })
            }
        </>
    )
}

export default ArticlesList