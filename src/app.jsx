import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import 'milligram'
import 'normalize.css'

const App = () => (
    <Container>
        <Header>
            <h1 style={{ margin: 0 }}>Reactflix</h1>
        </Header>

        <Main>
            Conteúdo
        </Main>

        <Footer>
            &copy;2018
        </Footer>
    </Container>
)

injectGlobal`
    html, body, #app {
        height: 100%;
    }
`

const headerHeight = '60px'
const footerHeight = '30px'

const Container = styled.div`
    height: 100%;
`

const Header = styled.header`
    height: ${headerHeight};
    background: #333;
`
const Main = styled.main`
    min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const Footer = styled.footer`
    height: ${footerHeight};
    background: #333;
`

export default App