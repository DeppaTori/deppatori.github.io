import { ADD_ARTICLE, REMOVE_ARTICLE } from '../actions/action'

const initialState = {
    articles: []
};
export function ArticleReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ARTICLE:
            return Object.assign({}, state, {
                articles: state.articles.concat(action.payLoad)
            })
        case REMOVE_ARTICLE:


            // state.articles.map((article,index)=>{

            //     if(article.id===action.id){

            //         return Object.assign({},article,{
            //             deleted:true
            //         })
            //     }
            //     return article
            // })
           
            return Object.assign({}, state, {
                articles: state.articles.map((article, index) => {

                    if (article.id === action.id) {

                        return Object.assign({}, article, {
                            deleted: true
                        })
                    }
                    return article
                })
            })

        default:
            return state
    }

}

