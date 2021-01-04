import React,{memo,useEffect} from "react";
import { shallowEqual,useDispatch,useSelector} from 'react-redux';

import ThemeHeaderRcm from '@/components/theme-header-rcm';
import SongsCover from "@/components/songs-cover";

import {
  RecommendWrapper
} from './style';
import {getHotRecommendAction} from "../../store/actionCreators";
import {HOT_RECOMMEND_LIMIT } from '@/common/constans'


export default memo(function HotRecommend(){
  // state

  // 组件和redux关联，获取数据和进行操作
  const {hotRecommends} = useSelector(state => ({
    hotRecommends:state.getIn(['recommend','hotRecommends'])
  }),shallowEqual);


  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  },[dispatch])

  return (
    <RecommendWrapper>
      <ThemeHeaderRcm title='热门推荐' keywords={['华语','流行','摇滚','民谣','电子']} />
      <div className='recommend-list'>
        {
          hotRecommends.map((item,index) => {
            return (
              <SongsCover key={item.id} info={item} />
            )
          })
        }
      </div>
    </RecommendWrapper>
  )
})