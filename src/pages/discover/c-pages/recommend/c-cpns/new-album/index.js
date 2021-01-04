import React,{memo,useEffect,useRef} from "react";
import {shallowEqual, useDispatch, useSelector} from "react-redux";

import {Carousel} from 'antd'
import ThemeHeaderRcm from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover'

import { getNewAlbumAction} from "../../store/actionCreators";

import {
  AlbumWrapper
} from './style'

export default memo(function NewAlbum(){

  // redux hook
  const {newAlbums} = useSelector(state => ({
    newAlbums:state.getIn(['recommend','newAlbums'])
  }),shallowEqual);
  const dispatch = useDispatch();



  // other hooks
  const pageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  },[dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeaderRcm title='新碟上架'  />
      <div className='content'>
        <button className='arrow arrow-left sprite_02' onClick={() => pageRef.current.prev()}></button>
        <div className='album'>
          <Carousel dots={false} ref={pageRef}>
            {
              [0,1].map(item => {
                return (<div key={item} className='page'>
                  {

                    newAlbums.slice(item*5,(item + 1) * 5).map(iten => {
                      return (
                        <AlbumCover key={iten.id} info={iten} size={100} width={118} bgp='-570' />
                      )
                    })
                  }
                </div>)
              })
            }
          </Carousel>
        </div>
        <button className='arrow arrow-right sprite_02' onClick={() => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})