import React, { useState } from 'react'

function Stories({ id, img, name, data, setStory,setViewStory}) {
    const [view, setView] = useState(false)
    const openStory = (id) => {
        const findStory = data.find(item => item.id == id);
        setStory(findStory)
        setView(true)
        setViewStory(true)
    }

    return (
        <div className="story" onClick={() => openStory(id)}>
            <img src={img} style={{ border: view ? "2px solid gray" : "2px solid red" }} alt="" />
            <p>{name}</p>
        </div>
    )
}

export default Stories
