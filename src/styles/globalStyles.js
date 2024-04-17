import { createGlobalStyle } from 'styled-components'

const myGlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    body {
        background:#000000;
        display:flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }
`

export default myGlobalStyles