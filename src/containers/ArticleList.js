import React from 'react'
import {connect} from 'react-redux'
import ArticleListComponent from '../components/ArticleListComponent'
import {removeArticle} from '../actions/action'

const mapStateToProps = state => {
    return {
        articles:state.articles.filter(a=>!a.deleted)
    }
}

const ArticleList = connect(mapStateToProps)(ArticleListComponent)

export default ArticleList



