import React,{memo} from "react";

import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from './style'

const HotRecommend =  memo(function(props){
  const {title,keywords} = props;

  return (
   <HeaderWrapper className='sprite_02'>
     <div className='left'>
       <h3 className='title'>{title}</h3>
       <div className='keyword'>
         {
           keywords.map((item,index) => {
              return (
                <div key={item} className='item'>
                  <a href="todo">{item}</a>
                  <span className='divider'>|</span>
                </div>
              )
          })
         }
       </div>
     </div>
     <div className='right'>
       <a href='baidu'>更多</a>
       <i className='icon sprite_02'></i>
     </div>
   </HeaderWrapper>
  )
})

HotRecommend.proTypes = {
  title:PropTypes.string.Required,
  keywords:PropTypes.array
}

HotRecommend.defaultProps = {
  keywords:[]
}

export default HotRecommend