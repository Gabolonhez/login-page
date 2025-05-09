import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 1px solid black;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    font-weight: bold;
    margin: 10px 10px 0px 10px;
`