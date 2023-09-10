import React from 'react'
import './Search.css'
function Search({ show }) {
    return (
        <div className='search' style={{ transform: show ? "translate(16px)" : "translate(-200px)" }}>
            <div className="searchTop">
                <h2>Search</h2>
                <div><input type="search" placeholder='Search' /></div>
            </div>
            <hr />
            <div className="searchBottom">
                <h3>Recent</h3>
                <div>No recent searches.</div>

            </div>

        </div>
    )
}

export default Search
