import styled from "styled-components";

export const Form = styled.form`
    background-color: var(--color-grey-4);
    padding: 5px;
    border: 1px solid var(--color-red-0);
    textarea{
        width: 90%;
        height: 5rem;
        background-color: var(--color-grey-4);
        color: var(--color-white-0);
        outline: none;
    }
    textarea:focus{
        outline: none;
    }
    button{
        width: fit-content;
        padding: 0 30px;
    }
`;