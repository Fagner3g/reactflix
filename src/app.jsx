import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'normalize.css'
import 'milligram'
import { connect } from 'react-redux'

import VideosList from './components/videos-list'
import VideoSingle from './components/video-single'
import RegisterVideo from './components/register-video'
import Header from './components/header'
import { headerHeight, footerHeight } from './utils/constants';
import Footer from './components/footer'
const App = ({ isRegisterVideoFormOpened }) => (
    <Container>
        <Header />
        <Main>
            {isRegisterVideoFormOpened && <RegisterVideo />}
            <VideoSingle />
            <VideosList />
        </Main>

        <Footer />
    </Container>
)

injectGlobal`
    html, body, #app {
        height: 100%;
    }
`
const Container = styled.div`
    height: 100%;
`
const Main = styled.main`
    min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const mapStateToPros = (state) => ({
    isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

export default connect(mapStateToPros)(App)