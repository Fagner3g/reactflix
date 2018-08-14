import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { registerVideo } from '../../redux-flow/reducers/videos/action-creators'

const RegisterVideo = ({ onSubmit }) => (
    <Form onSubmit={onSubmit}>
        <h2>Cadastrar vídeo</h2>

        <label htmlFor="id">ID do Vídeo:</label>
        <input type="text" id='id' name='id' autoComplete='off' />

        <label htmlFor="title">Titulo do Vídeo:</label>
        <input type="text" id='title' name='title' autoComplete='off' />

        <button>Cadastrar</button>
    </Form>
)

const Form = styled.form`
    padding: 10px;
`

const mapDispatchToProps = (dispatch) => ({
    onSubmit: async (e) => {
        e.preventDefault()
        e.persist()
        const {
            id: { value: id },
            title: { value: title }
        } = e.target

        await dispatch(registerVideo({ id, title }))
        e.target.reset()
        e.target[0].focus()
    }
})
export default connect(null, mapDispatchToProps)(RegisterVideo)