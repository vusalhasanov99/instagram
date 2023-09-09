import React from 'react'
import StorySlider from './storySlider/StorySlider'
import './Main.css'
import Posts from './posts/Posts'
function Main() {
  return (
    <div className='main'>
      <StorySlider />
      <Posts/>
    </div>
  )
}

export default Main
