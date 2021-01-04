import styled from 'styled-components';

import progress_bar from '@/assets/img/progress_bar.png';
import sprite_icon from '@/assets/img/sprite_icon.png'


export const PlaybarWrapper = styled.div`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: 52px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const Control = styled.div`
  display: flex;
  align-items: center;

  .prev, .next {
    width: 28px;
    height: 28px;
    cursor:pointer;
    
  }

  .prev {
    background-position: 0 -130px;
    &:hover{
      background-position-x:-30px ;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    cursor: pointer;
     background-position:0 ${props => props.isPlaying ? "-165px": "-204px"};
    &:hover{
      background-position-x: -40px;
    }
  }

  .next {
    background-position: -80px -130px;
    &:hover{
      background-position-x:-110px ;
    }
  }
`

export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
      }
      
      
      .singer-name:nth-child(2){
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${progress_bar}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${progress_bar}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${sprite_icon}) 0 -250px;
        }
      }

      .time {
        .now-time {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
  
`

export const Operator = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  top: 5px;

  .btn {
    width: 25px;
    height: 25px;
    cursor:pointer;
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    position: relative;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;
    
    .volume {
      background-position: -2px -248px;
      &:hover{
        background-position-x:-31px;
      }
    }

    
    
    .loop {
      background-position: ${props => {
      switch(props.sequence) {
        case 1:
          return "-66px -248px";
        case 2:
          return "-66px -344px";
        default:
          return "-3px -344px";
        }
      }};
      
      &:hover{
        background-position-x: ${props => {
          switch(props.sequence) {
            case 1:
              return "-93px";
            case 2:
              return "-93px";
            default:
              return "-33px";
          }
        }};
      }
    }

    .volume-value{
      position: absolute;
      display: flex;
      justify-content: center;
      top: -113px;
      left: 10px;

      right: calc(100% - 20px);
      height: 100px;
      width: 30px;
      background-color: rgba(0,0,0,0.7);
      padding-top: 10px;
      .ant-slider-vertical{
        height: 90%;
      }
      .ant-slider-track{
        background-color: #c70c0c;
      }
      .ant-slider-handle{
        background-color: #c70c0c;
        border:4px solid #fff;
      }
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
