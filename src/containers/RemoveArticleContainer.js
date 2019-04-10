import React from 'react'
import {connect} from 'react-redux'
import RemoveArticleComponent from '../components/RemoveArticleComponent'
import {removeArticle} from '../actions/action'

const mapDispatchToProps = dispatch => {
    return {
        onRemoveArticle:id=>dispatch(removeArticle(id))
    }
}

const RemoveArticleContainer = connect(null,mapDispatchToProps)(RemoveArticleComponent)

export default RemoveArticleContainer

