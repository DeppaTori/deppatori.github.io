import React,{Component} from 'react'
import uuidv1 from 'uuid'

class FormComponent extends Component{
    constructor(){
        super();
        this.state = {
            title:"",
            deleted:false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.id]:[event.target.value],deleted:false})
        console.log(this.state);
    }

    handleSubmit(event){
        event.preventDefault();
        const {title} = this.state;
        const {deleted} = this.state;
        const id = uuidv1();
   
        this.props.addArticle({title,id,deleted});
      
        this.setState({title:"",deleted:false})
    }

    render(){
        const {title} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="title" value={title}
                onChange={this.handleChange} />
                <button type="submit">SAVE</button>
            </form>
        )
    }
}

export default FormComponent