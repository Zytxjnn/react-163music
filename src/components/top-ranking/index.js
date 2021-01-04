import React,{memo} from 'react';
import {useDispatch} from "react-redux";

import {getSizeImage} from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';

import {
  TopRankingWrapper
} from "./style";


export default memo(function (props){
  // props and state
  const {info} = props;
  const {tracks = []} = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  return (
    <TopRankingWrapper>
      <div className="header">
       <div className="image">
         <img src={getSizeImage(info.coverImgUrl)} alt=""/>
         <a href="/todo" className='image_cover'></a>
       </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0,10).map((item,index) => {
            return (
              <div className='list-item' key={item.id}>
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">{item.name}</span>
                  <div className="operate">
                    <button className="btn play sprite_02" onClick={e => playMusic(item)}></button>
                    <button className="btn addto sprite_icon2"></button>
                    <button className="btn favor sprite_02"></button>
                  </div>
                </div>

              </div>
            )
          })
        }
      </div>
      <div className="footer"></div>
    </TopRankingWrapper>
  )
});