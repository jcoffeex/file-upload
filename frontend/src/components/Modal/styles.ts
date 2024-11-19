import styled from "styled-components";
import { ButtonBase } from "../../styles/base";
import colors from "../../styles/colors";
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
    background-color: ${colors["white-01"]};
    
    padding: 20px;

    border-radius: 12px;
   
    width: 500px;
    height: 50%;

    text-align: center;
    
    position: relative;
   `
const Button = styled(ButtonBase)`
    margin-top: 10px;
    &:hover{
        background-color: ${colors["blue-01"]};
        color: ${colors["white-01"]}
    }
`
export {
    Modal,
    Content,
    Button
}