import styled from "styled-components";

export const LoginModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 5000;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 530px;
  height: 300px;
  background-color: #fff;
  box-shadow: 0 5px 16px rgba(0,0,0,0.8);
  border-radius: 4px;
`

export const LoginModalTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding:10px 18px;
  background-color: #2d2d2d;
  width: 100%;
  .login-method{
    color:#fff;
    font-size: 14px;
    font-weight: 800;
  }
`

export const LoginModalContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 220px;
   flex:1;
  
  div{
    padding: 5px 0;
  }
  
  .input{
    background-color: #fff;
    border:1px solid #ccc;
    padding: 5px;
    width: 100%;
  }
  
  .login-options{
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .autoLogin{
      width: 70px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      user-select: none;
    }
    
    input[type='checkbox']{
      
    }
  }
  
  .login{
    height: 31px;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    text-space: 100px;
    letter-spacing:10px;
    //background-position: left -390px;
    background-position: left -469px;
    user-select: none;
    
    &:active{
      background-position: left -387px;
    }
  }
`

export const LoginModalBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 18px;
  background-color: #f7f7f7;
  
  .left,.right{
    cursor: pointer;
  }
  
  .left{
    color: #0c72c3;
  }
`