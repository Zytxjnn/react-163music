import React,{memo} from 'react';
import { Provider } from 'react-redux'

import { renderRoutes } from 'react-router-config';

import {HashRouter} from "react-router-dom";
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import AppPlayerBar from './pages/player/app-player-bar';
import HoverLyric from '@/components/hover-lyric';
import LoginModal from '@/components/login-modal';


import routes from './router';
import store from "./store";


export default memo(function App(){
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader/>
        {renderRoutes(routes)}
        <AppFooter/>
        <AppPlayerBar/>
        <HoverLyric/>
        <LoginModal/>
      </HashRouter>

    </Provider>
  );
})

