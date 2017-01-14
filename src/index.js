import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import YTSearch from 'youtube-api-search'
const YOUTUBE_K = 'AIzaSyAM8WM7nu6k0xqepea47bn7Q8WZzKcp75g'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos : [],
      selectedVideo: null
    }

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: YOUTUBE_K, term: term}, videos => {
      this.setState({ videos : videos,
      selectedVideo: videos[0] })
    })
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return(
      <div>
        <SearchBar onSearchtermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={ this.state.videos } onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))
