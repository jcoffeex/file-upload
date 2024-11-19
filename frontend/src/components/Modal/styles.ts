import styled from "styled-components";
import { ButtonBase } from "../../styles/base";

const Modal = styled.div`
    position: fixed; 
    left: 0;
    top: 0;
   
    width: 100%; 
    height: 100%; 
   
    overflow: auto; 
    background-color: rgba(0,0,0,0.4);

    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    background-color: #fefefe;
    
    padding: 20px;

    border-radius: 12px;
   
    width: 500px;
    height: 50%;

    text-align: center;
    
    position: relative;
   `
const Button = styled(ButtonBase)`
    &:hover{
        background-color: green;
    }
`
export {
    Modal,
    Content,
    Button
}