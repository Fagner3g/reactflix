import React from 'react'
import styled from 'styled-components'

const RegisterVideo = () => (
    <Form>
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

export default RegisterVideo