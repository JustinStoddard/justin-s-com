import React from 'react';
import ResumeImage from '../../Images/1874879A-E7C9-474F-BE68-80044AF98F0B.jpg';
import CoverImage from '../../Images/New cover picture';
import expertiseImage1 from '../../Images/React Image.png';
import expertiseImage2 from '../../Images/redux image.png';
import expertiseImage3 from '../../Images/ruby image.png';
import expertiseImage4 from '../../Images/RubyRails image.png';
import expertiseImage5 from '../../Images/nodejs image.png';
import expertiseImage6 from '../../Images/HTML5 image.png';
import expertiseImage7 from '../../Images/CSS.3 image.png';
import expertiseImage8 from '../../Images/semantic image.png';
import { Segment, Container, Grid, Image, Header } from 'semantic-ui-react';

const MobileHome = () => {
  return(
    <Container>
      <Segment textAlign="center" inverted>
        <Header as="h2">Home</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted textAlign="center">
              <Segment textAlign="center" color="blue">
                <Header as="h3">Resumé</Header>
              </Segment>
              <Segment color="blue">
                <Image src={ResumeImage} size="medium"/>
              </Segment>
              <a href="https://docs.google.com/document/d/1dYnCcCfJKsHuxqHiNBoLZpWeIVUbquj40Dk-I-yqDCA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Check Out Source</a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment inverted textAlign="center">
              <Segment textAlign="center" color="blue">
                <Header as="h3">Cover letter</Header>
              </Segment>
              <Segment color="blue">
                <Image src={CoverImage} size="medium"/>
              </Segment>
              <a href="https://github.com/JustinStoddard/New-Cover-Letter" target="_blank" rel="noopener noreferrer">Check Out Source</a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Segment textAlign="center" inverted>
        <Header as="h2">Expertise</Header>
      </Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage1} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage2} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage3} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage4} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage5} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage6} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage7} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment inverted>
              <Segment color="blue">
                <Image src={expertiseImage8} size="medium" style={styles.imageSize}/>
              </Segment>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

const styles = {
  imageSize: {
    height: '100px'
  }
}

export default MobileHome;