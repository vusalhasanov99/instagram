import React, { useState } from 'react'
import './StorySlider.css';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import ClickStory from './ClickStory';
import Stories from './Stories';
function StorySlider() {
    const [transform, setTransfrom] = useState(0)
    const data = [
        {
            id:1,
            img: "https://i.pinimg.com/236x/ba/f8/39/baf8390b6cd0f96d448aab467a7448d6.jpg",
            name: "tagiyevis"
        },
        {
            id:2,  
            img: "https://i.pinimg.com/236x/fe/0c/38/fe0c38725d18fe6e0a6c06e35241e1f5.jpg",
            name: "anmesii"
        },
        {
            id:3,
            img: "https://i.pinimg.com/236x/b9/87/d1/b987d146a21c944b3b164c2301d961b9.jpg",
            name: "narminss_"
        },
        {
            id:4,
            img: "https://i.pinimg.com/236x/85/a0/44/85a044355df1c2dc99f815b675a4a3b6.jpg",
            name: "aliyeva_a"
        },
        {
            id:5,
            img: "https://i.pinimg.com/236x/6a/09/1a/6a091a7d7dc18ac26d8b5ee06238f4fe.jpg",
            name: "elmir_babasli"
        },
        {
            id:6,
            img: "https://i.pinimg.com/236x/fa/c6/77/fac677e2345d70163949a2b1e5644fff.jpg",
            name: "aisella"
        },
        {
            id:7,
            img: "https://i.pinimg.com/236x/b4/b0/a2/b4b0a26a98e0a2cdbcdd8728db1fadf5.jpg",
            name: "radue_rama"
        },
        {
            id:8,
            img: "https://i.pinimg.com/236x/9d/a0/a2/9da0a24c429358ee355e0cce1fc9f69d.jpg",
            name: "tagiyevis"
        },
        {
            id:9,
            img: "https://i.pinimg.com/236x/48/f7/d4/48f7d4741191583bd19befbeb6433271.jpg",
            name: "alina_uk"
        },
        {
            id:10,
            img: "https://i.pinimg.com/236x/e0/20/e6/e020e6ec15b6edc4e698a237f648e612.jpg",
            name: "vusala_12"
        },
        {
            id:11,
            img: "https://i.pinimg.com/236x/3f/97/9c/3f979c5164ba5886754ec17e2612dea8.jpg",
            name: "nisa.yva"
        },
        {
            id:12,
            img: "https://i.pinimg.com/474x/13/5c/b7/135cb7affd2ed9c46742a2b9fb211e0c.jpg",
            name: "nurgun_82"
        },
        {
            id:13,
            img: "https://i.pinimg.com/236x/00/0f/22/000f225ac194cec11071028ed9c59c7a.jpg",
            name: "asitama"
        },
        {
            id:14,
            img: "https://i.pinimg.com/236x/d7/31/4c/d7314c66bb17733f5e1e3841fa20eb29.jpg",
            name: "nurcan.qd"
        },
        {
            id:15,
            img: "https://i.pinimg.com/236x/78/83/69/788369b3bb239d3617e497cfddad4fe9.jpg",
            name: "aila_i"
        },
        {
            id:16,
            img: "https://i.pinimg.com/236x/00/bc/a0/00bca0070227d622f48913b499c12c21.jpg",
            name: "Wlaine_01"
        },
        {
            id:17,
            img: "https://i.pinimg.com/236x/bb/2d/3b/bb2d3bcab304c5c3c2ca85f4ff76c99b.jpg",
            name: "akbarli"
        },
        {
            id:18,
            img: "https://i.pinimg.com/236x/6e/5e/44/6e5e44ac4ccee83b35e2586faf78a68d.jpg",
            name: "mina_sva"
        },
    ]
    const [story,setStory]=useState(null)
    const [viewStory,setViewStory]=useState(false)
    
    return (
        <>
            <div className="icons">
                <div className="iconLeft" style={{ display: transform == 0 ? "none" : "block" }} onClick={() => setTransfrom(transform + 280)}><BsFillArrowLeftCircleFill /></div>
                <div className="iconRight" style={{ display: transform < -420 ? "none" : "block" }} onClick={() => setTransfrom(transform - 280)}><BsFillArrowRightCircleFill /></div>
            </div>
            <div className='storySlider'>
                <div className="stories" style={{ transform: `translate(${transform}px)` }}>
                    {data.map(item => <Stories {...item} story={story} data={data} setStory={setStory} setViewStory={setViewStory}/> )}
                </div>
            </div>
            {viewStory&&<ClickStory story={story} data={data} setStory={setStory} setViewStory={setViewStory}/>}
        </>

    )
}

export default StorySlider
