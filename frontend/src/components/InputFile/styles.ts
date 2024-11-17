import styled from "styled-components";

const Label = styled.label`
    border-style: dashed;

    width: 80%;
    height: 100px;

    border-color: #7291D0;

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