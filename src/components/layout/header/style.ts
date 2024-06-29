import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 30px;
  background-color: #fff;

  .header {
    display: flex;
    align-items: center;
    .logo {
      display: inline-block;
      height: 40px;
      margin-right: 80px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    ul {
      display: flex;
      gap: 30px;
      li a{
        font-size: 16px;
        font-weight: 500;
        color: #3fa2f6;
      }
    }
  }
`;
