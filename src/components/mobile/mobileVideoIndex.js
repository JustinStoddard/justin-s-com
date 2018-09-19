import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './MobileVideoDemo/mobileSearchBar';
import VideoList from './MobileVideoDemo/mobileVideoList';
import VideoPlayer from './MobileVideoDemo/mobileVideoPlayer';
import { Container, Divider } from 'semantic-ui-react';

const API_KEY = "AIzaSyBAbu36HFStXbL3D577r1yheldu7Y4AdfQ"

class VideoDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch('React JS');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return( 
      <Container>
        <SearchBar onSearchTermChange={videoSearch}/>
        <Divider hidden/>
        <VideoPlayer video={selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={videos}
        />
      </Container>
    )
  }
}

export default VideoDemo;