import React,{memo} from 'react';
// import { shallowEqual, useDispatch, useSelector} from 'react-redux'
// import {getTopBannerAction} from "./store/actionCreators";
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import TopBanner from './c-cpns/top-banner/index';
import HotRecommend from './c-cpns/hot-recommend/index';
import NewAlbum from './c-cpns/new-album';
import RecommendRanking from './c-cpns/recoomend-ranking';
import UserLogin from './c-cpns/user-login';
// import SettleSinge from './c-cpns/settle-singer'
// import HotRadio from './c-cpns/hot-radio';


import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from  './styles'

function Recommend(props){



  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className='wrap-v2'>
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
          <RecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          {/*<SettleSinge/>*/}
          {/*<HotRadio/>*/}
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)