import styled from "styled-components";
import { ButtonBase } from "../../styles/base";
const File = styled.div`
    background-color: #E9F0FF;
    
    width: 80%;
    height: 60px;
    
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 8px;
`

const Button = styled(ButtonBase)`
    background-color: white;
    width: 100px;
    
    &:hover{
        background-color: rgb(246, 246, 246);
    }
`

export {
    File,
    Button
}