import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import 'normalize.css'
import 'milligram'

import VideosList from './components/videos-list'
import VideoSingle from './components/video-single'
import RegisterVideo from './components/register-video'
import Header from './components/header'
import { headerHeight, footerHeight } from './utils/constants';
import Footer from './components/footer'
import { fetchVideos } from './redux-flow/reducers/videos/action-creators';

class App extends PureComponent {

    componentDidMount() {
        this.props.fetchVideos()
    }

    render() {
        const { isRegisterVideoFormOpened } = this.props
        return (
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
    }
}

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

// const mapDispatchToProps = (dispatch) => ({
//     fetchVideos: () => dispatch(fetchVideos())
// })
//Forma reduzida
const mapDispatchToProps = { fetchVideos }

export default connect(mapStateToPros, mapDispatchToProps)(App)