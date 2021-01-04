import React,{memo} from "react";

// import PropTypes from 'prop-types';

import {
  SongsCoverWrapper
} from './style';
import {getCount,getSizeImage} from '@/utils/format-utils';



const SongsCover =  memo(function(props){
  const {info} = props;



  return (
    <SongsCoverWrapper>
      <div className='cover-top'>
        <img src={getSizeImage(info.picUrl,140)} alt=""/>
        <div className='cover sprite_covor'>
          <div className='info sprite_covor'>
            <span>
              <i className='sprite_icon erji'></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className='cover-bottom text-nowrap' title={info.name}>
        {info.name}
      </div>
      <div className='cover-source text-nowrap' title={'by'+ info.copywriter || info.creator_nickname}>
        by {info.copywriter || info.creator_nickname}
      </div>
    </SongsCoverWrapper>
  )
})


export default SongsCover