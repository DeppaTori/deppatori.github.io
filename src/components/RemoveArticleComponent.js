import React,{Component} from 'react'

class RemoveArticleComponent extends Component{
    constructor(){
        super();
         this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        this.props.onRemoveArticle(this.props.articleId);
    }

    render(){
        return (
            <a href=""
      onClick={this.handleClick}
      >
            Delete
            </a>
        )
    }
}

export default RemoveArticleComponent