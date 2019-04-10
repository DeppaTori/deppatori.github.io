export const ADD_ARTICLE = 'ADD_ARTICLE'

export const REMOVE_ARTICLE = 'REMOVE_ARTICLE'

export function addArticle(payLoad){
    return {
        type:ADD_ARTICLE,
        payLoad
    }
}

export function removeArticle(id){
    return {
        type:REMOVE_ARTICLE,
        id
    }
}