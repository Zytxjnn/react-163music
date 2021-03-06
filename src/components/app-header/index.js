import React,{memo} from 'react'

import {headerLinks} from '@/common/local-data';

import {NavLink} from "react-router-dom";
import {Input} from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function AppHeader(){


  // 业务逻辑
  const showLoginDialog = () => {

  }

  const showSelectItem = (item,index) => {
    if(index < 3){
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className='sprite_01 icon'></i>
        </NavLink>
      )
    }else{
      return (
        <a href={item.link} target='_blank' rel="noreferrer">{item.title}</a>
      )
    }
  }

  return (
    <HeaderWrapper>
      <div className='content wrap-v1'>
        <HeaderLeft>
          <a href='#/' className='logo sprite_01'> </a>
          <div className='select-list'>
            {
              headerLinks.map((item,index) => {
                return (
                  <div className='select-item' key={item.title}>
                    {showSelectItem(item,index)}
                  </div>
                )
            })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <div className='center'>创作者中心</div>
          <button onClick={() => showLoginDialog()}>登录</button>
        </HeaderRight>
      </div>
      <div className='divider' />
    </HeaderWrapper>
  );
})

