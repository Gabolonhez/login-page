import styled from 'styled-components';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginContainer = styled.div`
    width: 100%;
    max-width: 420px;
    background-color:rgb(202, 202, 202);

    border-radius: 8px;
    padding: 20px;

    flex:1;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    color:rgb(15, 13, 15);
    align-self: center;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`
export const Spacing = styled.div`
    margin: 10px 0;
`

export const ErrorText = styled.p`
    color: red;
    font-size: 12px;
    font-weight: bold;
    margin: 10px;
`;