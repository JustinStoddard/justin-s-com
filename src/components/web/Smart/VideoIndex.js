import React, { Component } from 'react';
import { debounce } from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from '../Demos/VideoDemo/searchBar';
import VideoList from '../Demos/VideoDemo/videoList';
import VideoPlayer from '../Demos/VideoDemo/videoPlayer';
import { Container, Divider, Grid } from 'semantic-ui-react';

const API_KEY = "AIzaSyBAbu36HFStXbL3D577r1yheldu7Y4AdfQ"

class VideoDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.videoSearch();
  }

  async videoSearch(term='React JS') {
    await YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state;
    const videoSearch = debounce((term) => {this.videoSearch(term)}, 300)
    return( 
      <Container>
        <SearchBar onSearchTermChange={videoSearch}/>
        <Divider hidden/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              <VideoPlayer video={selectedVideo}/>
            </Grid.Column>
            <Grid.Column width={6}>
              <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={videos}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default VideoDemo;
