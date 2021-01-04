import React,{memo,useState,useRef} from "react";
// import {useState} from 'react-redux'

import {
  LoginModalWrapper,
  LoginModalTop,
  LoginModalContent,
  LoginModalBottom
} from "./style";

export default memo(function LoginModal(){
  const [accountNum,setAccountNum] = useState('');
  const [password,setPassword] = useState('');
  const accountRef = useRef();


  // 业务逻辑
  const phoneInput = e => {
    const value = e.target.value;
    if(!isNaN(value)){
      setAccountNum(value);
    }
  }
  const passwordInput = e => {
    const value = e.target.value;
    setPassword(value);
  }

  return (
    <LoginModalWrapper>
      <LoginModalTop>
        <div className='login-method'>手机号登录</div>
      </LoginModalTop>
      <LoginModalContent>
        <div className="login-content">
          <div className="iphoneNum">
            <input type="text" placeholder='请输入手机号'
                   value={accountNum}
                   onChange={e => phoneInput(e)}
                   className='input'
            ref={accountRef}/>
          </div>
          <div className="password">
            <input type="password" placeholder='请输入密码'
                   value={password}
                   onChange={e => passwordInput(e)}
                   className='input' />
          </div>
          <div className="login-options">
            <div className="autoLogin">
              <input type="checkbox" name="autoLogin" id="autoLogin"/>
              <label htmlFor='autoLogin'>自动登录</label>
            </div>
            <div className="forget-pass">
              忘记密码?
            </div>
          </div>
          <div className="login sprite_button">
            登录
          </div>
        </div>
      </LoginModalContent>
      <LoginModalBottom>
        <div className="left">&lt;&nbsp;其他登录方式</div>
        <div className="right">没有账号？免费注册&nbsp;&gt;</div>
      </LoginModalBottom>
    </LoginModalWrapper>
  )
})