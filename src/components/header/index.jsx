import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { headerHeight } from '../../utils/constants';
import { openRegisterVideo } from '../../redux-flow/reducers/ui/actions-creators';

const MainHeader = ({ onOpenRegisterVideo }) => (
    <Header>
        <HeaderTitle>Reactflix</HeaderTitle>
        <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar vídeo </RegisterButton>
    </Header>
)


const Header = styled.header`
    align-items: center;
    background: #333;
    display: flex;
    height: ${headerHeight};
    justify-content: space-between;
    padding: 0 10px;
`
const RegisterButton = styled.button`
    margin-bottom: 0;
`
const HeaderTitle = styled.h1`
    color: #fff;
    margin-bottom: 0;
`
const mapDispatchToProps = (dispatch) => ({
    onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})
export default connect(null, mapDispatchToProps)(MainHeader)