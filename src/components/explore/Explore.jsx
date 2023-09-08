import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Explore() {
    const [exploreDatas, setExploreDatas] = useState([])
    useEffect(() => {
        axios
            .get("https://api.unsplash.com/search/photos?page=56&query=programming&client_id=XcCrW9fp-plKCO8U2keqOIt1mcZat_rCvvQwysHohsU")
            .then(res => setExploreDatas(res.data))
    }, [])
    console.log(exploreDatas);
    return (
        <div style={{columns:"3",margin:"auto"}}>
            {exploreDatas.results?.map(item => (
                <div className="img">
                    <img style={{width:"100%"}} src={item.urls.regular} alt="" />
                    {/* <video width="320" height="240" controls>
                        <source src={item.videoUrl }  type="video/mp4" />
                    </video> */}
                </div>
            ))}
        </div>
    )
}

export default Explore
