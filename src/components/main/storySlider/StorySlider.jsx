import React, { useState } from 'react'
import './StorySlider.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
function StorySlider() {
    const [transform,setTransfrom]=useState(0)
    return (
        <>
            <div className="icons">
                <div className="iconLeft" style={{display:transform==0?"none":"block"}} onClick={()=>setTransfrom(transform+280)}><BsFillArrowLeftCircleFill /></div>
                <div className="iconRight" style={{display:transform<-420?"none":"block"}} onClick={()=>setTransfrom(transform-280)}><BsFillArrowRightCircleFill /></div>
            </div>
            <div className='storySlider'>
                <div className="stories" style={{transform:`translate(${transform}px)`}}>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                    <div className="story"><img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" alt="" /></div>
                </div>
            </div>
        </>

    )
}

export default StorySlider
