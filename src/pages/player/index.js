import React,{memo} from 'react';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style'

export default memo(function Player(){
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>

        </PlayerLeft>
        <PlayerRight></PlayerRight>
      </div>
    </PlayerWrapper>
  )
})