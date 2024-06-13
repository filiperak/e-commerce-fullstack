import styled from "styled-components";

export const ProfileContainer = styled.div`
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
  padding: 4px;
  margin: 15px auto;
  max-width:600px;
`;
export const ProfileHeader = styled.div`
    display: flex;
    border-bottom: 1.5px solid var(--main-gray);
    padding-bottom: 1px;
    font-size: 0.85;
    .selected{
        background-color: var(--main-orange);
        color: #fff;
    }
`;
export const ProfileHeaderOption = styled.div`
    border-radius: 6px 6px 0 0px ;
    background-color: var(--main-gray);
    padding: 6px;
    cursor: pointer;
   
`;
export const ProfileLogin = styled.form`

> label {
    font-size: 0.8rem;
    display: block;
    margin-top: 3px;
  }
  > input {
    width: 98%;
    padding: 4px;
    border: 1px solid var(--main-gray);
    border-radius: 4px;
    display: block;
    margin-top: 4px;
  }
  > input:focus {
    outline: none;
    border: 1px solid var(--main-orange);
  }
   #submit-btn{
    width: 100%;
    cursor: pointer;
    &:active{

    }
   }
`;
