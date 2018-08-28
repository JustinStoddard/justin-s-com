import React, { Component } from 'react';
import ResumeImage from '../Images/1874879A-E7C9-474F-BE68-80044AF98F0B.jpg';
import CoverImage from '../Images/New cover picture';
import { Segment, Container, Grid, Divider, Header, Image } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return(
      <Container>
        <br />
        <Segment textAlign="center">
          <Header as="h1">Home</Header>
        </Segment>
        <br />
        <Grid>
          <Grid.Row> {/* Second Row */}
            <Grid.Column width={8}>
              <Segment textAlign="center">
              <Segment inverted>
                <Header as="h1">Resumé</Header>
              </Segment>
                <Divider hidden />
                  <Image src={ResumeImage} size="large" style={styles.paddingLeft1}/>
                  <Divider hidden />
                  <Divider hidden />
                  <Divider hidden />
                  <a href="https://docs.google.com/document/d/1dYnCcCfJKsHuxqHiNBoLZpWeIVUbquj40Dk-I-yqDCA/edit?usp=sharing" target="_blank">Check Out Source</a>
              </Segment>
            </Grid.Column>
            
            <Grid.Column width={8}>
              <Segment textAlign="center">
                <Segment inverted>
                  <Header as="h1">Cover Letter</Header>
                </Segment>
                <Divider hidden />
                <Image src={CoverImage} size="medium" style={styles.paddingLeft2}/>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <a href="https://github.com/JustinStoddard/New-Cover-Letter" target="_blank">Check Out Source</a>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row> {/* Third Row */}
            <Grid.Column>
              <Segment textAlign="center">
              <Segment inverted>
                <Header as="h1">Content 1</Header>
              </Segment>
                <Divider hidden />
                  Main Content
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
} 
const styles = {
  paddingLeft2: {
    paddingLeft: '50px'
  },
}


export default Home;