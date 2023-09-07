import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Explore() {
    const [exploreDatas, setExploreDatas] = useState([])
    useEffect(() => {
        axios
            .get("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")
            .then(res => setExploreDatas(res.data))
    }, [])
    console.log(exploreDatas);
    return (
        <div style={{columns:"3",margin:"auto"}}>
            {exploreDatas.map(item => (
                <div className="video">
                    <video width="320" height="240" controls>
                        <source src={item.videoUrl }  type="video/mp4" />
                    </video>
                </div>
            ))}
        </div>
    )
}

export default Explore
