import React,{memo,useEffect,useRef,useState,useCallback} from 'react';
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { Slider } from 'antd';

import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
}from './style';
import {getSizeImage,formatDate} from "@/utils/format-utils";
import {getSongDetailAction,changeSequenceAction,changeCurrentIndexAndSongAction,changeCurrentLyricIndexAction} from "../store/actionCreator";
import {getPlaySong} from "@/utils/format-utils";
import {NavLink} from "react-router-dom";


export default memo(function AppPlayerBar(props){
  // props and state
  const [currentTime,setCurrentTime] = useState(0)
  const [progress,setProgress] = useState(0);
  const [isChanging,setIsChanging] = useState(false); // 是否在滑动进度条
  const [isPlaying,setIsPlaying] = useState(false); //  是否正在播放
  const [isVolumeShow,setIsVolumeShow] = useState(false);
  const [volume,setVolume] = useState(0.5); // 音量大小

  // redux hooks
  let {currentSong,sequence,lyricList,currentLyricIndex} = useSelector(state => ({
    currentSong:state.getIn(['player','currentSong']),
    sequence:state.getIn(['player','sequence']),
    lyricList:state.getIn(['player','lyricList']),
    currentLyricIndex:state.getIn(['player','currentLyricIndex']),
  }),shallowEqual);

  const dispatch = useDispatch();

  // other hooks
  const audioRef = useRef();
  useEffect(() =>{  // 请求数据
    dispatch(getSongDetailAction(531786301));
  },[dispatch]);
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id);
    // audioRef.current.play().then(res => {
    //   setIsPlaying(true);
    // }).catch(err => {}) //  新版浏览器禁止自动播放

  },[currentSong])


  // 业务逻辑
  const picUrl = currentSong.al && currentSong.al.picUrl; // 歌曲封面
  const ar = (currentSong && currentSong.ar) || []; //  歌手列表
  const duration = currentSong.dt || '00:00'; // 歌曲时长/毫秒
  let showDuration = formatDate(duration,'mm:ss'); // 歌曲时长格式化后
  let showCurrentTime = formatDate(currentTime,'mm:ss');  // 歌曲播放到的时间


  // handle function
  const playMusic = useCallback(() => {
    isPlaying ?  audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  },[isPlaying])

  const timeUpdate = (e) => { // 更新歌曲播放到的位置
    const currentTime = e.target.currentTime || 0;
    if(!isChanging){
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }
    // 获取当前歌词
    let i = 0
    for (;i <lyricList.length;i++){
      let lyricItem = lyricList[i];
      if(currentTime * 1000 < lyricItem.time){
         break;
      }
    }

    if(currentLyricIndex !== i-1){  // 只有歌词索引发生改变才dispatch
      dispatch(changeCurrentLyricIndexAction(i-1));
    }
  }
  const musicEnd = () => {
    if(sequence === 2){ // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }else{
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  }

  const sliderChange = useCallback(value => { // 在进度条上滑动
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);

  },[duration]);
  const sliderAfter = useCallback(value => {  // 进度条松手
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);
    if(!isPlaying){ playMusic()}
  },[duration,isPlaying,playMusic]);

  const changeSequence = () => {  // 切换播放方式
    let currentSequence = sequence + 1;
    if(currentSequence > 2){
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence));
  }

  const changeMusic = (tag) => {
    dispatch(changeCurrentIndexAndSongAction(tag));
  }

  const volumeChang = e => {   // 监听音量变化
    audioRef.current.volume = e;
    setVolume(e);
  }

  const toggleVolumeShow = () => {
    setIsVolumeShow(!isVolumeShow)
  }



  return (
    <div>
      <PlaybarWrapper className='sprite_playbar'>
        <div className="content wrap-v2">
          <Control isPlaying={isPlaying} >
            <button className='sprite_playbar prev' onClick={e => changeMusic(-1)} />
            <button className='sprite_playbar play' onClick={e => playMusic()} />
            <button className='sprite_playbar next' onClick={e => changeMusic(1)} />
          </Control>
          <PlayInfo>
            <div className="image">
              <NavLink to="/discover/player">
                <img src={getSizeImage(picUrl,34)} alt=""/>
              </NavLink>
            </div>
            <div className="info">
              <div className="song">
                <span className="song-name">{currentSong.name}</span>
                {
                  ar.map((item,index) => {
                    return (
                      <a href='/todo' key={item.name} className="singer-name">{item.name}{index+1 < ar.length ? '/' : ''}</a>
                    )
                  })
                }

              </div>
              <div className="progress">
                <Slider value={progress}
                  onChange={sliderChange}
                  onAfterChange={sliderAfter} tooltipVisible={false} />
                <div className="time">
                  <span className="now-time">{showCurrentTime}</span>
                  <span className="divider">/</span>
                  <span className="total-time">{showDuration}</span>
                </div>
              </div>
            </div>
          </PlayInfo>
          <Operator sequence={sequence}>
            <div className="left">
              <button className="sprite_playbar btn favor" />
              <button className="sprite_playbar btn share" />
            </div>
            <div className="right sprite_playbar">
              <button className="sprite_playbar btn volume" onClick={() => toggleVolumeShow()} />
              {
                isVolumeShow ? ( <div className="volume-value">
                  <Slider vertical={true} step={0.01} max={1}
                          value={volume}
                          onChange={e => volumeChang(e) }
                          tooltipVisible={false}/>
                </div>) : null
              }
              <button className="sprite_playbar btn loop" onClick={e => changeSequence()} />
              <button className="sprite_playbar btn playlist" />
            </div>
          </Operator>
        </div>
        <audio ref={audioRef}  onTimeUpdate={timeUpdate} onEnded={e => musicEnd()} />
      </PlaybarWrapper>
    </div>
  )
})