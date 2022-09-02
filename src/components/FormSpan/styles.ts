import styled from "styled-components";

export const P = styled.p`
  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  text-align: center;
  font-size: 0.75rem;
  color: var(--color-grey-0);

  a {
    font-size: 0.75rem;
    color: var(--color-red-0);
  }

  .link_login {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
`;
