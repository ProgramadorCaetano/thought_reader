import styled from 'styled-components'

export const Title = styled.h1 `
    color: #ffffff;
    background-color: #b752ff;
`
export const  Texto = styled.p `
    font-size: 24px;
    margin-top: 10px;
    font-weight: bold;

`
export const Image = styled.img `
    margin-top: 10px;
    

`

export const ContinuarButton = styled.button `
    background: blue;
    color: white;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius:5px;
    margin-left: 10px;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }
`
export const SimButton = styled.button `
    background: #6cf000;
    color: #000000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius:5px;
    margin-left: 10px;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }
`

export const NaoButton = styled.button `
    background: #6cf000;
    color: #000000;
    height: 35px;
    padding: 5px 10px;
    cursor: pointer;
    border-radius:5px;
    margin-left: 50px;
    margin-top: 10px;

    &:hover {
        opacity: 0.8;
    }
`


export const Container = styled.div `
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background: #b752ff;
    padding: 20px;
    border-radius: 10px;

`
 export const ContainerButton = styled.div `
    display: flex;
    align-items:center;
    justify-content: center;
 `