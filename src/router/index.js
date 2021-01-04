import React from 'react'

import Discover from '@/pages/discover';
import Friend from '@/pages/friend';
import Mine from '@/pages/mine';

import { Redirect } from 'react-router-dom';

import Recommend  from "../pages/discover/c-pages/recommend";
import Ranking  from "../pages/discover/c-pages/ranking";
import Songs  from "../pages/discover/c-pages/songs";
import DJRadio  from "../pages/discover/c-pages/djradio";
import Artist  from "../pages/discover/c-pages/artist";
import Album  from "../pages/discover/c-pages/album";
import Player from '../pages/player'


const router = [
  {
    path:'/',
    exact:true,
    render:() => (
      <Redirect to='/discover'/>
    )
  },
  {
    path:'/discover',
    component:Discover,
    routes:[
      {
        path:'/discover',
        exact:true,
        render:() => (
          <Redirect to={'/discover/recommend'}/>
        )
      },
      {
        path:'/discover/recommend',
        component:Recommend
      },
      {
        path:'/discover/recoomend-ranking',
        component:Ranking
      },
      {
        path:'/discover/songs',
        component:Songs
      },
      {
        path:'/discover/djradio',
        component:DJRadio
      },
      {
        path:'/discover/artist',
        component:Artist
      },
      {
        path:'/discover/album',
        component:Album
      },
      {
        path:'/discover/player',
        component:Player
      },
    ]
  },
  {
    path:'/friend',
    component:Friend
  },
  {
    path:'/mine',
    component:Mine
  }
]

export default router