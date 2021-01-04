import { getSongDetail,getLyric} from '@/services/player'
import { getRandom } from '@/utils/math-utils';
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';


const changeCurrentSongAction = (currentSong) => ({
  type:actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})
export const getSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    // 根据id查找playlist中是否已经有了该歌曲
    const playList = getState().getIn(['player','playList']);
    const songIndex = playList.findIndex(song => ids === song.id);
    // 歌曲是否已存在播放列表中
    let song = null;
    if(songIndex !== -1){
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      dispatch(changeCurrentSongAction(song));
      dispatch(getLyricAction(song.id));
    }else{  // 不存在
      getSongDetail(ids).then(res => {
        song = res.songs && res.songs[0];

        if(!song) return; // 对应歌曲无版权或需要vip才能进行播放

        // 将最新请求到的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2. 更新redux中的数据
        dispatch(changePlayListAction(newPlayList)); // 播放列表
        dispatch(changeCurrentSongIndexAction(newPlayList.length -1)); // 当前播放歌曲索引值
        dispatch(changeCurrentSongAction(song));
        dispatch(getLyricAction(song.id));
      })
    }
  }
}

const changePlayListAction = playList => ({
  type:actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentSongIndexAction = index => ({
  type:actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
})

export const changeSequenceAction = sequence => ({
  type:actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentIndexAndSongAction = tag => { // 上一首/下一首歌曲
  return (dispatch,getState) => {
    const sequence = getState().getIn(['player','sequence']);
    const playList = getState().getIn(['player','playList']);
    let currentSongIndex = getState().getIn(['player','currentSongIndex']);
    switch (sequence){
      case 1: // 顺序播放
        let randomIndex = getRandom(playList.length);
        while (randomIndex === currentSongIndex){
          randomIndex = getRandom(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:  // 单曲循环
        currentSongIndex += tag;
        if(currentSongIndex >= playList.length) currentSongIndex = 0;
        if(currentSongIndex < 0) currentSongIndex = playList.length -1;
        break;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(getLyricAction(currentSong.id))
  }
}

export const getLyricAction = id =>{
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

export const changeLyricListAction = lyricList => ({
  type:actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})