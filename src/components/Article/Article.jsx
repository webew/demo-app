import React, { useState } from 'react'

const Article = ({ titre, contenu }) => {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible);
    }

    return (
        <>
            <article>
                <h1>{titre}</h1>
                <button onClick={handleClick}>
                    {visible ? "Masquer" : "Afficher"}
                </button>
                {visible && <p>{contenu}</p>}
            </article >
        </>
    )
}

export default Article