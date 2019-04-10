import React from 'react'
import {connect} from 'react-redux'
import ArticleTableComponent from '../components/ArticleTableComponent'


const mapStateToProps = state => {
    return {
        articles:state.articles.filter(a=>!a.deleted)
    }
}

const ArticleTableContainer = connect(mapStateToProps)(ArticleTableComponent)

export default ArticleTableContainer
