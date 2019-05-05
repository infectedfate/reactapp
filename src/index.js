import React from 'react'
import {render} from 'react-dom'

function Article() {
    const body = <section>body</section>
    const creation_date = new Date().toDateString() 
    return(
        <div>
            <h2>Title</h2>
            {body}
            <h3>Creation date: {creation_date}</h3>
        </div>
    )
}

function App() {
    return(
        <div>
             <h1>Hello World!</h1>
             <Article />
        </div>
    )
}

render(<App/>, document.getElementById('root'))