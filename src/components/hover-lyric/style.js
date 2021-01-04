import styled from 'styled-components';

export const HoverLyricWrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 50px;
  padding:10px 20px;
  font-size: 20px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover{
    color:#fff;
    background-color: rgba(0,0,0,0.5);
  }
`