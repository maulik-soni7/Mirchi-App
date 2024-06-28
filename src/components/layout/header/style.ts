import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px;
  background-color: blanchedalmond;

  .left {
    display: flex;
    .logo {
      width: 160px;
      height: 40px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    h2 {
      margin-right: 20px;
    }
    ul {
      display: flex;
      gap: 20px;
    }
  }
`;
