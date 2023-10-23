import React, { useEffect } from 'react'
import GlobalApi from '../Services/GlobalApi'

export default function SliderBar() {
  useEffect(()=>{
    getTrendingVideos()
  },[])
  const getTrendingVideos=()=>{
    GlobalApi.getTrendingVideos.then(resp=>{
        console.log(resp)
    })
  }
  return (
    <div>
      slider
    </div>
  )
}
