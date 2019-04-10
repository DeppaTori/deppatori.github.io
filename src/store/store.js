import {createStore} from 'redux'
import {ArticleReducer} from '../reducers/ArticleReducer'

const store = createStore(ArticleReducer)

export default store