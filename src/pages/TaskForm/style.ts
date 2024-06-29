import styled from 'styled-components';

export const Wrapper = styled.div`
background-color: rgba(15, 103, 177, 0.1);
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 20px 30px;
    border-radius: 5px;
    h2 {
      font-size: 28px;
      font-weight: 700;
      line-height: 34px;
      color: #3fa2f6;
      margin-bottom: 20px;
    }
    .form-group{
      margin-bottom: 20px;
      input {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        font-weight: 400;
        line-height: 18px;
      }
      .error {
        color: red;
        margin-top: 7px;
      }
    }

    button {
      max-width: 250px;
      padding: 10px;
      border: none;
      background-color: #007bff;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }

  }
`;
