import React, { useContext } from 'react'
import './Posts.css'
import { PostContext } from '../../context/Context'
import Post from './Post'
function Posts() {
    const {postDatas} = useContext(PostContext)
    return (
        <div className='posts'>
            {
                postDatas.reverse().map(post => <Post {...post}/> )
            }
        </div>
    )
}   

export default Posts
