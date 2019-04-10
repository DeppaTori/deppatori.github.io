import React from 'react'
import FormContainer from '../containers/FormContainer'
import ArticleList from '../containers/ArticleList'
import ArticleTableContainer from '../containers/ArticleTableContainer'

const App = ()=>(
    <div>
        <p>Add Form</p>
        <FormContainer />
        <div style={{width:1000}}>
            <div style={{width:450,float:'left'}}>
                <p>Article List</p>
                <ArticleList />
            </div>
            <div style={{width:450,float:'left'}}>
                <p>Article List</p>
                <ArticleTableContainer />
            </div>
        </div>
        
        
    </div>
)

export default App