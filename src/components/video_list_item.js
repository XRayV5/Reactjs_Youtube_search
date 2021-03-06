import React from 'react'

const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url

    return (
      <li className='list-group-item' onClick={ () => onVideoSelect(video) }>
        <div className='video-list media'>
          <img className='media-object' src={ imgUrl } alt=""/>
        </div>
        <div className='media-body'>
          <div className='media-heading'>{ video.snippet.title }</div>
        </div>
      </li>
    )
}


export default VideoListItem
