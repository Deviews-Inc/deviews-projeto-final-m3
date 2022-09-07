import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 2rem;

  figure{
    display: none;
  }
  
  p{
    font-size: 12px;
    margin: 0.3rem;
  }

  .contact{
    display: flex;
    align-items: center;
    m
    a{
      margin: 0.125rem;
    }
  }
  @media screen and (min-width: 1024px){
    justify-content: space-around;
    flex-flow: column;
    border: 1px solid var(--color-red-0);
    border-radius: 0.3rem;
    width: 8rem;
    margin: 0 0.2rem;
    padding-top: 0.5rem;
    figure{
      display: flex;
      border-radius: 50%;
      z-index: 2;
      overflow: hidden;
      width: 3.125rem;
      height: 3.125rem;
    }
    img{
      z-index: 1;
      width: 3.125rem;
      height: 3.125rem;
    }
    .contact{
      width: 8rem;
      justify-content: center;
      a{
        margin: 0.31rem;
      }
    }
    
  }
`;