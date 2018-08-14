import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { ADD_VIDEO } from '../../redux-flow/reducers/videos/actions';

const RegisterVideo = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar vídeo</h2>

        <label htmlFor="id">ID do Vídeo:</label>
        <input type="text" id='id' name='id' autoComplete='off' />

        <label htmlFor="title">Titulo do Vídeo:</label>
        <input type="text" id='title' name='title' />

        <button>Cadastrar</button>
    </Form>
)

const Form = styled.form`
    padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (e) => {
        e.preventDefault()
        dispatch({
            type: ADD_VIDEO,
            payload: {
                id: '',
                title: ''
            }
        })
    }
})
export default connect(null, mapDispatchToProps)(RegisterVideo)