import React, { Component } from 'react';
import ResumeImage from '../Images/1874879A-E7C9-474F-BE68-80044AF98F0B.jpg';
import CoverImage from '../Images/New cover picture';
import expertiseImage1 from '../Images/React Image.png';
import expertiseImage2 from '../Images/redux image.png';
import expertiseImage3 from '../Images/ruby image.png';
import expertiseImage4 from '../Images/RubyRails image.png';
import expertiseImage5 from '../Images/nodejs image.png';
import expertiseImage6 from '../Images/HTML5 image.png';
import expertiseImage7 from '../Images/CSS.3 image.png';
import expertiseImage8 from '../Images/semantic image.png';
import { Segment, Container, Grid, Divider, Header, Image, Responsive } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Responsive as={Segment} textAlign="center" inverted>
          <Header as="h1">Home</Header>
        </Responsive>
        <br />
        <Responsive as={Grid}>
          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Responsive as={Segment} textAlign="center" inverted>
              <Responsive as={Segment} color="blue">
                <Header as="h1">Resumé</Header>
              </Responsive>
                <Divider hidden />
                <Responsive as={Segment} color="blue">
                  <Image src={ResumeImage} size="large" style={styles.marginFixer}/>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                </Responsive>
                <a href="https://docs.google.com/document/d/1dYnCcCfJKsHuxqHiNBoLZpWeIVUbquj40Dk-I-yqDCA/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Check Out Source</a>
              </Responsive>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment textAlign="center" inverted>
                <Segment color="blue">
                  <Header as="h1">Cover Letter</Header>
                </Segment>
                <Divider hidden />
                <Segment color="blue">
                  <Image src={CoverImage} size="medium" style={styles.marginFixer}/>
                </Segment>
                <a href="https://github.com/JustinStoddard/New-Cover-Letter" target="_blank" rel="noopener noreferrer">Check Out Source</a>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Responsive>
        <Divider hidden/>
        <Segment textAlign="center" inverted>
          <Header as="h1">Expertise</Header>
        </Segment>
        <Responsive as={Grid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage1} size="medium"/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage2} size="medium"/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Divider hidden/>
                  <Divider hidden/>
                  <Image src={expertiseImage3} size="medium"/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage4} size="medium" style={styles.railsImage}/>
                </Segment>
              </Responsive>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Divider hidden/>
                  <Divider hidden/>
                  <Divider hidden/>
                  <Image src={expertiseImage5} size="large"/>
                  <Divider hidden/>
                  <Divider hidden/>
                  <Divider hidden/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage6} size="medium"/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage7} size="small" style={styles.cssImage}/>
                </Segment>
              </Responsive>
            </Grid.Column>
            <Grid.Column width={4}>
              <Responsive as={Segment} textAlign="center" inverted>
                <Segment color="blue">
                  <Image src={expertiseImage8} size="medium"/>
                </Segment>
              </Responsive>
            </Grid.Column>
          </Grid.Row>
        </Responsive>
        <Divider hidden/>
      </Container>
    )
  }
} 

const styles = {
  marginFixer: {
    display: 'inline-block'
  },
  cssImage: {
    display: 'inline-block',
    height: '203px'
  },
  railsImage: {
    height: '205px'
  }
}

export default Home;