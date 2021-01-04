import React,{memo} from "react";
import {shallowEqual, useSelector} from "react-redux";

import {
  HoverLyricWrapper
} from "./style";


export default memo(function HoverLyric(){

  const {lyricList,currentLyricIndex} = useSelector(state => ({
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex']),
  }),shallowEqual);

  const content = lyricList[currentLyricIndex] &&  lyricList[currentLyricIndex].content;
  return  (
    <HoverLyricWrapper>
      <div>{content}</div>
    </HoverLyricWrapper>
  )
})