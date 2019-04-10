import React from 'react'
import {connect} from 'react-redux'
import {addArticle} from '../actions/action'
import FormComponent from '../components/FormComponent'

const mapStateToProps = dispatch => {
    return {
        addArticle:article=>dispatch(addArticle(article))
    }
}

const FormContainer = connect(null,mapStateToProps)(FormComponent)

export default FormContainer