import React, { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';

function ClickStory({ story, setStory, setViewStory, data }) {
    const [time, setTime] = useState(0)
    useEffect(() => {
        if (time < 100) {
            const timer = setTimeout(() => {
                setTime(time + 0.17);
            }, 7);

            return () => clearTimeout(timer);
        }
        nextStory?rightStory():setViewStory(false)
    }, [time, story]);
    const nextStory = data.find(item => item.id == story?.id + 1);
    const previosStory = data.find(item => item.id == story?.id - 1);
    const rightStory = () => {
        setStory(nextStory)
        setTime(0)
    }
    const leftStory = () => {
        setStory(previosStory)
        setTime(0)

    }

    return (
        <div className='clickStory'>
            <div className='storyAbout'>
                <div className="storyTop">
                    <div className="time" style={{ width: `${time}%`, height: "5px", backgroundColor: "white" }}></div>
                    <p className='storyName'>{story?.name}</p>
                </div>
                <div className="img">
                    <img src={story?.img} alt="" />
                </div>
                <div className="storyIcons">
                    {previosStory && <div className="iconLeft" onClick={leftStory} ><BsFillArrowLeftCircleFill /></div>}
                    {nextStory && <div className="iconRight" onClick={rightStory} ><BsFillArrowRightCircleFill /></div>}
                </div>
            </div>

            <div className="close" onClick={() => setViewStory(false)}>
                <IoMdClose />
            </div>
        </div>
    )
}

export default ClickStory
