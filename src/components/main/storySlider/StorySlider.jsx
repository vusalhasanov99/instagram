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
            img: "data:image/jpeg;base64,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",
            name: "anmesii"
        },
        {
            id:3,
            img: "https://media.sandrareynolds.co.uk/models/Vxk2K71eXMMPjiWMlCxCsOB1VD620Ird90zgHNLw9XC1EOzKPe5GWLtI3IzkfTtFwpxdLv.jpg",
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
            img: "https://images.unsplash.com/photo-1492338801513-63d80bb23046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVhcGxlfGVufDB8fDB8fHww&w=1000&q=80",
            name: "aisella"
        },
        {
            id:7,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNtheeUP-OlTZ00kxDqZ_H4-nT9T3gaogOHQ&usqp=CAU",
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
