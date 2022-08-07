import React from 'react'
import './featured.scss'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const featured = ({ type }) => {

  return (
    <div className='featured'>

          {type && (
        <div className="category">
          <span>{type === "movie"? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option selected disabled>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

        <img src="https://sm.ign.com/ign_mear/news/p/paramount-/paramount-delays-top-gun-maverick-jackass-forever-to-2022_kkcg.jpg" alt="" />

        <div className="info">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Top_Gun_Maverick_logo.png" alt="" />

        <span className="desc">After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.
</span>

        <div className="buttons">
            <button className="play">
            <PlayArrowIcon/>
            <span>Play</span>
            </button>
            <button className="more">
                <InfoOutlinedIcon/>
                <span>More Info</span>
            </button>
        </div>
        </div>
    </div>

 
  )
}

export default featured