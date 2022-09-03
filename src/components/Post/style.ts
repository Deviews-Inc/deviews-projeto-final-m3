import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 380px;
  border: 1px solid white;
  margin: 0 auto;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    img {
      width: 20%;
      height: 100%;
      border-radius: 50%;
    }

    h2 {
      color: white;
      width: 130px;
      font-size: 20px;
      text-align: center;
    }
  }

  > p {
    font-size: 20px;
    color: white;
    padding: 20px 10px 20px 10px;
    text-align: start;
  }

  img {
    width: 90%;
    height: 40%;
    object-fit: cover;
  }
`;
