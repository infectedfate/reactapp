import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: true
    }

    render() {
        const {article} = this.props
        const body = this.state.isOpen && <section>{article.text}</section>
        const creation_date = new Date(article.date).toDateString() 
        return(
            <div>
                <h2>
                {article.title}
                <button onClick={this.handleClick}>
                {this.state.isOpen ? 'close' : 'open'}
                </button>
                </h2>
                {body}
                <h3>Creation date: {creation_date}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clicked')
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}


export default Article