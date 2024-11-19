import styled from "styled-components";
import { ButtonBase } from "../../styles/base";
import colors from "../../styles/colors";
const File = styled.div`
    background-color: ${colors["blue-02"]};
    
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
        background-color: ${colors["white-02"]};
    }
`

export {
    File,
    Button
}