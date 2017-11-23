import React, {Component} from 'react'
import ArticleList from './ArticleList'
import ArticlesChart from './ArticlesChart'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
    state = {
        selected: null
    }

    handleSelect = selected => this.setState({ selected })

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <h1>App name</h1>
                <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} multi />
                <ArticleList articles = {articles} />
                <ArticlesChart articles = {articles} />
            </div>
        )
    }
}

export default App