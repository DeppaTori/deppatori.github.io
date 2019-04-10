import React,{Component} from 'react'

class ArticleTableComponent extends Component{
    constructor(){
        super();
    }

    render(){
        return (
            <table>
                <tr>
                    <th>Title</th>
                </tr>
                {this.props.articles.map((article,index)=>{
                    return (
                        <tr><td>{article.title}</td></tr>
                    )
                })}
              
            </table>
        )
    }
}

export default ArticleTableComponent

