import styled from 'styled-components';

export const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 500px;
    width: 100%;
  }

  .modal-content h2 {
    margin-top: 0;
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
  }

  .modal-content form label {
    margin-bottom: 10px;
  }

  .modal-content form select,
  .modal-content form button {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .modal-content form button[type='submit'] {
    background-color: #007bff;
    color: white;
    border: none;
  }

  .modal-content form button[type='button'] {
    background-color: #ccc;
    border: none;
  }
`;
