import styled from "styled-components";
import colors from "../../styles/colors";
const Label = styled.label`
    border-style: dashed;

    width: 80%;
    height: 100px;

    border-color: ${colors["blue-01"]};

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`;

const InputFile = styled.input`
    display: none;
`;

export {
    InputFile,
    Label
}