import React from 'react'
import RemoveArticleContainer from '../containers/RemoveArticleContainer'

const ArticleListComponent = ({articles})=>(
    <ul>
        {
            articles.map(el=>(
                <li key={el.id}>{el.title} <RemoveArticleContainer articleId={el.id} /></li>
            ))
        }
    </ul>
)

export default ArticleListComponent