import React from 'react'

function Article(props) {
    const {article} = props
    const body = <section>{article.text}</section>
    const creation_date = new Date(article.date).toDateString() 
    return(
        <div>
            <h2>
            {article.title}
            
            </h2>
            {body}
            <h3>Creation date: {creation_date}</h3>
        </div>
    )
}

export default Article